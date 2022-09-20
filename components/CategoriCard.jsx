import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

const CategoriCard = (props) => {
  const router = useRouter();
  const data = props;
  // const re = data.name.map((c) => c.join('-'));
  return (
    <Button
      size="sm"
      key={data.id}
      onClick={() => {
        router.push({
          pathname: `/categori/${data.id}&0&10`,
          query: { name: data.name },
        });
      }}
    >
      {data.name}
    </Button>
  );
};

export default CategoriCard;
