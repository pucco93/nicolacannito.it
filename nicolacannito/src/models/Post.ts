type Post = {
    id: number;
    title: string;
    text: string;
    date: Date;
    url: string;
    urlImg: string;
    // image: string; maybe img could be in data64 format or in url, since this is an example project which won't do real api calls it will have static data, so I prefered to use a url to get the image instead of a long data64
};

export default Post;