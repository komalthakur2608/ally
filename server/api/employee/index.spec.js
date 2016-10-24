'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var employeeCtrlStub = {
  index: 'employeeCtrl.index',
  show: 'employeeCtrl.show',
  create: 'employeeCtrl.create',
  upsert: 'employeeCtrl.upsert',
  patch: 'employeeCtrl.patch',
  destroy: 'employeeCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var employeeIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './employee.controller': employeeCtrlStub
});

describe('Employee API Router:', function() {
  it('should return an express router instance', function() {
    expect(employeeIndex).to.equal(routerStub);
  });

  describe('GET /api/employees', function() {
    it('should route to employee.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'employeeCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/employees/:id', function() {
    it('should route to employee.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'employeeCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/employees', function() {
    it('should route to employee.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'employeeCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/employees/:id', function() {
    it('should route to employee.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'employeeCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/employees/:id', function() {
    it('should route to employee.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'employeeCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/employees/:id', function() {
    it('should route to employee.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'employeeCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
