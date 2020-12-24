export class Post {
  results: (PostData | PostData[])[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: number;
  };
}

export class PostData {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: number;
      longitude: number
    };
    timezone: {
      offset: number;
      description: string
    }
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string
  };
  dob: {
    date: Date;
    age: number
  };
  registered: {
    date: Date;
    age: number
  };
  phone: number;
  cell: number;
  id: {
    name: string;
    value: string
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string
  };
  nat: string;
}
