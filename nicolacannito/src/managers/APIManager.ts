import { UndefinedPost, ServiceID, TemplateID, SuccessStatus, FailureStatus } from '../Constants/Constants';
import { Post, Form } from '../models/index';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

const _mapPosts = (promiseResult: any) => {
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

const _mapPost = (element: any) => {
    let postsMapped: Post = UndefinedPost;
    postsMapped = {
        id: element['id'],
        title: element['title'],
        text: element['text'],
        date: element['date'],
        url: element['url'],
        urlImg: element['urlImg']
    };
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

const _mockSinglePost = (id: any) => {
    let dataMockFile = require("../mockData/mockData.json");
    let singlePost = dataMockFile.filter((item: any) => {
        return item.id === Number(id.slug);
    });
    return singlePost[0];
}

export const getSinglePost = async (id: any) => {
    try {
        /**
         * this is a fake request emulated using a settimeout.
         * Normally here I would implement the method to retrieve the real data
         * and then process it to be in the Post type as described in models.
         * If APIs have an endpoint with the id of the post to retrieve you could create the query with that, or simply try to filter items by id with the id passed from the app.
         */
        await _timeout(4000);
        return _mapPost(_mockSinglePost(id));
    } catch(error) {
        console.log(error);
        return UndefinedPost;
    }
};

export const sendMail = async (form: Form) => {
    /** 
     * Here could be implemented a fuction to call an API from your server that could auto send a mail with all the collected data, or using a third party service that could send email with a template.
     * Here will be used emailjs, obviously all the private infos will be removed
     */
    try {
        const response: EmailJSResponseStatus = await emailjs.send(ServiceID, TemplateID, form);
        // let response = {
        //     status: 200
        // };
        debugger;
        if(response.status === 200) {
            return SuccessStatus;
        }
    } catch(error) {
        console.log(error);
        return FailureStatus;
    }
};