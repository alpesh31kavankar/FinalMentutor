// export class Session {
//     SessionId: number;
//     MainCategoryId: number;
//     SubCategoryId: number;
//     SkillId: number;
//     MentorId: number;
//     SessionFormatId: number;
//     Title: string;
//     SubTitle: string;
//     Description: string;
//     Date: string;
//     StartTime: string;
//     EndTime: string;
//     Link: string;
//     Status: string;
//     CreatedBy: string;
//     CreatedDate: string;
//     UpdatedBy: string;
//     UpdatedDate: string;
// }


// export class Registration {
//     RegistrationId: number;
//     FName: string;
//     LName: string;
//     Email: string;
//     Password: string;
//     EmailStatus: string;
//     OTPNo: string;
//     Status: string
//     CreatedBy: string;
//     CreatedDate: string;
//     UpdatedBy: string;
//     UpdatedDate: string;
// }


// export class Login {
//     Email: string;
//     Password: string;
// }

// export class MentorSkill {
//     MentorSkillId: number;
//     MentorProfileId: number;
//     SkillId: number;
//     Certificate:string;
//     Status: string;
//     CreatedBy: string;
//     CreatedDate: string;
//     UpdatedBy: string;
//     UpdatedDate: string;
// }
// export class MenteeSkill {
//     MenteeSkillId: number;
//     MenteeProfileId: number;
//     SkillId: number;
//     Status: string;
//     CreatedBy: string;
//     CreatedDate: string;
//     UpdatedBy: string;
//     UpdatedDate: string;
// }
// export class MentorPlan {
//     MentorPlanId: number;
//     MentorProfileId: number;
//     IndividualPlanId: number;
//     Status: string;
//     CreatedBy: string;
//     CreatedDate: string;
//     UpdatedBy: string;
//     UpdatedDate: string;
// }
// export class MenteePlan {
//     MenteePlanId: number;
//     MenteeProfileId: number;
//     IndividualPlanId: number;
//     Status: string;
//     CreatedBy: string;
//     CreatedDate: string;
//     UpdatedBy: string;
//     UpdatedDate: string;
// }

// export class FeedBack {  
//     FeedBackId: number;
//     SessionId: number;
//     MenteeId: number;
//     Rating: string;
//     Message: string;
//     MentorStatus: string;
//     Status: string;
//     CreatedBy: string;
//     CreatedDate: string;
//     UpdatedBy: string;
//     UpdatedDate: string;
// }


// export class UserDetail {  
//     UserDetailId: number;
//     RegistrationId: number;
//     CountryId: number;
//     StateId: number;
//     CityId: number;
//     Address: string;
//     Contact: string;
//     Photo: string;
//     Status: string;
//     CreatedBy: string;
//     CreatedDate: string;
//     UpdatedBy: string;
//     UpdatedDate: string;
// }

// export class MenteeProfile {
//     MenteeProfileId: number;
//     RegistrationId: number;
//     JobTitle: string;
//     Industry: string;
//     YearsOfExperience: string;
//     TargetedDesignation: string;
//     Status: string;
//     CreatedBy: string;
//     CreatedDate: string;
//     UpdatedBy: string;
//     UpdatedDate: string;
// }

// export class MentorProfile {
//     MentorProfileId: number;
//     RegistrationId: number;
//     // TransactionId: number;
//     Address: string;
//     JobTitle: string;
//     Company: string;
//     Industry: string;
//     HighestEducation: string;
//     // Resume: string;
//     AreaOfExpertise: string;
//     LanguagesSpoken: string;
//     Status: string;
//     CreatedBy: string;
//     CreatedDate: string;
//     UpdatedBy: string;
//     UpdatedDate: string;
// }




// export class Session {
//     SessionId: number;
//     MainCategoryId: number;
//     SubCategoryId: number;
//     SkillId: number;
//     MentorId: number;
//     SessionFormatId: number;
//     Title: string;
//     SubTitle: string;
//     Description: string;
//     Date: string;
//     StartTime: string;
//     EndTime: string;
//     Link: string;
//     Status: string;
//     CreatedBy: string;
//     CreatedDate: string;
//     UpdatedBy: string;
//     UpdatedDate: string;
// }
export class MainCategory {
    MainCategoryId: number;
    Title: string;
    Description: string;
    Photo: string;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
}
export class SubCategory {
    SubCategoryId: number;
    mainCategory:MainCategory
    MainCategoryId: number;
    Title: string;
    Description: string;
    Photo: string;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
}

export class Skill {
    SkillId: number;
    subCategory:SubCategory
    SubcategoryId: number;
    Title: string;
    Description: string;
    Photo: string;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
}

export class IndividualPlan {
    IndividualPlanId: number;
    Title: string;
    Description: string;
    Price: string;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
}

//end user Start

export class Session {
    SessionId: number;
    course:Course
    CourseId: number;
    Title: string;
    SubTitle: string;
    Description: string;
    SessionDate: string;
    StartTime: string;
    Link: string;
    Photo: string;
    Status: string;

    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
}




export class Registration {
    RegistrationId: number;
    FName: string;
    LName: string;
    Email: string;
    Password: string;
    EmailStatus: string;
    OTPNo: string;
    Status: string
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
}


export class Login {
    Email: string;
    Password: string;
}

export class MentorSkill {
    MentorSkillId: number;
    MentorProfileId: number;
    skill:Skill
    SkillId: number;
    Certificate: string;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
}
export class MenteeSkill {
    MenteeSkillId: number;
    MenteeProfileId: number;
    SkillId: number;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
}
export class MentorPlan {
    MentorPlanId: number;
    MentorProfileId: number;
    IndividualPlanId: number;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
}
export class MenteePlan {
    MenteePlanId: number;
    MenteeProfileId: number;
    IndividualPlanId: number;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
}

export class FeedBack {
    FeedBackId: number;
    SessionId: number;
    MenteeId: number;
    Rating: string;
    Message: string;
    MentorStatus: string;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
}


export class UserDetail {
    UserDetailId: number;
    RegistrationId: number;
    CountryId: number;
    StateId: number;
    CityId: number;
    Address: string;
    Contact: string;
    Photo: string;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
}

export class MenteeProfile {  
    MenteeProfileId: number;
    RegistrationId: number;
    JobTitle: number;
    Industry: string; 
    YearsOfExperience: string;
    TargetedDesignation: string; 
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
}

export class MentorProfile {  
    MentorProfileId: number;
    RegistrationId: number;
   // TransactionId: number;
    Address: number;
    JobTitle: number;
    Company: string;
    Industry: string; 
    HighestEducation: string;
   // Resume: string;
    AreaOfExpertise: string; 
    LanguagesSpoken: string;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
}

export class Course {
    CourseId: number;
    MentorProfileId: number;
    mentorSkill:MentorSkill
    MentorSkillId: number;
    Title: string;
    SubTitle: string;
    Description: string;
    Price: string;
    Duration: string;
    StartDate: string;
    EndDate: string;
    Photo: string;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
}

	