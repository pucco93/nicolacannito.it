import { TIMEOUT } from 'dns';
import { Post } from '../models/index';

const _mapPosts = (promiseResult: any) => {
    debugger;
    let postsMapped: Post[] = [];
    promiseResult.forEach((element: any) => {
        postsMapped.push({
            id: element['id'],
            title: element['title'],
            text: element['text'],
            date: element['date'],
            url: element['url'],
            urlImg: element['urlImg']
        });
    });
    return postsMapped;
};

const _mockData = () => {
    let dataMockFile = require("../mockData/mockData.json");
    return dataMockFile;
};

const _timeout = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

export const getPosts = async () => {
    try {
        /**
         * this is a fake request emulated using a settimeout.
         * Normally here I would implement the method to retrieve the real data
         * and then process it to be in the Post type as described in models.
         */
        await _timeout(4000);
        return _mapPosts(_mockData());
    } catch(error) {
        console.log(error);
        return [];
    }
};