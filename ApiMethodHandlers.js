/**
 * Module Dependencies
 */
const errors = require('restify-errors');

const handleInvalidContent = (err, next) => {
    console.error(err);
    return next(
        new errors.InvalidContentError(err.errors.name.message),
    );
};

const handleInvalidData = (err, next) => {
    return next(
        new errors.InvalidContentError("Expects 'application/json'"),
    );
};

const handleInternalError = (err, next) => {
    console.error(err);
    return next(
        new errors.InternalError(err.message)
    );
};

const GetAll = (Model, request, response, next) => {
    Model.apiQuery(request.params, (err, docs) => {
        if (err) {
            return handleInvalidContent(err, next);
        }

        response.send(docs);
        next();
    });
};

const GetById = (Model, request, response, next) => {
    Model.findOne({ _id: request.params.id }, (err, doc) => {
        if (err) {
            handleInvalidContent(err, next);
        }

        response.send(doc);
        next();
    });
}

const Save = (Model, request, response, next) => {
    if (!request.is('application/json')) {
        handleInvalidData(next);
    }

    const data = request.body || {};
    const model = new Model(data);

    model.save(err => {
        if (err) {
            handleInternalError(err, next);
        }

        response.send(201);
        next();
    });
};

class ApiEndpointHelper {
    constructor(Model) {
        this.Model = Model;

        this.GetAll = this.GetAll.bind(this);
        this.GetById = this.GetById.bind(this);
    }

    

    GetAll(request, response, next) {
        GetAll(this.Model, request, response, next);
    }

    GetById(request, response, next) {
        GetById(this.Model, request, response, next);
    }

    Save(request, response, next) {
        Save(this.Model, request, response, next);
    }
};


module.exports = {
    ApiEndpointHelper,
    GetAll,
    Save
};
