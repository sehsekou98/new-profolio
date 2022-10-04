interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    _asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInfomation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: String;
    phoneNumber: string;
    profilePic: Image;
}

export interface Technology extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}


export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}


export interface Experience extends SanityBody {
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: date;
    dateEnded: Date;
    isCurrentlyWorkingHere: boolean;
    jonTitle: string;
    points: string[];
    technologies: Technology[];
} 


export interface Project extends SanityBody {
    _type: "project";
    title:string;
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
}

export interface Social extends SanityBody {
    _type: 'social';
    title: string;
    url: string
}