type MethodTypes = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface IURLInfo {
  method: MethodTypes;
  url: string;
  queryString: Record<string, string>;
}

const regExp = /^(\w+) (?:(.*?)(\?.+?)?) .*$/;

function parseQueryString(queryString: string): Record<string, string> {
  const keyValues = queryString.slice(1).split('&');

  return keyValues.reduce<Record<string, string>>((acc, item) => {
    const [key, value] = item.split('=');

    return {
      ...acc,
      [key]: value,
    };
  }, {});
}

export default function parseURLInfo(header: string): IURLInfo {
  const matched = header.split('\n')[0].trim().match(regExp);

  if (Array.isArray(matched)) {
    const [, method, url, queryString] = matched as [string, string, string, string | undefined];

    const parsedQueryString = queryString !== undefined
      ? parseQueryString(queryString) : {};

    return {
      method: method as MethodTypes,
      url,
      queryString: parsedQueryString,
    };
  }

  throw new Error('Header\'s first line is not valid');
}
