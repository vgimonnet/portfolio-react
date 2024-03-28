export type Project = {
  title: string;
  description: string;
  link: string;
  picture: string;
  technos: Techno[];
}

export type Techno = {
  name: string;
  picture: string;
}