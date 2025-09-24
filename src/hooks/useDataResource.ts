import { useEffect,useState } from 'react';

type useDataResourceType<T> = {
  getData: () => Promise<T>;
};

export const useDataResource = <T>({ getData }: useDataResourceType<T>) => {
  const [resource, setResource] = useState<T | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getData();

      setResource(data);
    })();
  }, [getData]);

  return resource;
};
