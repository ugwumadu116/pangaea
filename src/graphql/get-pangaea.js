import gql from 'graphql-tag'

export const GET_PANGAEA = gql`
    query  {
        products {
          id,
          title,
          image_url,
          price(currency: $Currency) ,
        },
        currency
      }
`;





