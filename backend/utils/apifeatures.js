class ApiFeatures {
    constructor(query, queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }

    search(){
        const keyword = this.queryStr.usn ? {
            usn:{
                $regex: this.queryStr.usn,
                $options: "i",
            }
        }:{};
        this.query = this.query.find({...keyword});
        return this;
    }

    filter(){
        const querycpy = {...this.queryStr};

        //Removing fields for category
        const removefields = ["usn","page","limit"];
        removefields.forEach((key) => delete querycpy[key]);

        //Filter for grades
        let queryStr = JSON.stringify(querycpy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key)=> `$${key}`);
        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }

    pagination(resultperpage){
        const currentpage = Number(this.queryStr.page) || 1;
        const skip = resultperpage*(currentpage-1);
        this.query = this.query.limit(resultperpage).skip(skip);
        return this;
    }
}

module.exports = ApiFeatures;