let expect = require('chai').expect;
let request = require('request');
let url = 'http://localhost:3000/api/projects'
let project ={
    title:'prac 6 test',
    link:'prac 6 test',
    path:'prac 6 test',
    description:'prac 6 test'
}

let updatedProject = {
    title:'update 6 test',
    link:'update 6 test',
    path:'update 6 test',
    description:'update 6 test'
}

describe("test get all project", function() {
    it('return status code of 200', function(done) {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('return success message', function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body);
            expect(body.message).to.contain('Success');
            done();
        });
    });

    it('return an array', function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body);
            expect(body.data).to.be.a('array')
            done();
        });
    });
});

describe('test post a project',function(){
    it('insert a project to database',function(done){
        request.post({url:url,form:project},function(errpr,response,body){
            body = JSON.parse(body);
            expect(body.message).to.contain('added');
            done();
        });
    });
});


describe('test delete a project',function(){
    it('delete a project from database',function(done){
        request.delete({url:url,form:project},function(errpr,response,body){
            body = JSON.parse(body);
            expect(body.message).to.contain('removed');
            done();
        });
    });
});

describe('test post a project',function(){
    it('insert a project to database',function(done){
        request.post({url:url,form:project},function(errpr,response,body){
            body = JSON.parse(body);
            expect(body.message).to.contain('added');
            done();
        });
    });
});

describe('test update a project', function() {
    it('update a project in database', function(done) {
        request.put({url:url, form:updatedProject}, function(error, response, body) {
            body = JSON.parse(body);
            expect(body.statusCode).to.equal(200);
            expect(body.message).to.equal('Last project successfully updated');
            done();
        });
    });
});