class UsersPageObjects {

  addNewUserButton = { web: '//*[@data-testid="AddIcon"]' };

  userFIlterToolBar = { web: '//*[@aria-label="user-filter-toggle"]' };

  userStatusFilterToolBar = { web: '//*[@aria-label="user-status-filter-toggle"]' };

  clearFilterButton = { web: '//button[text()="Clear Filters"]' };

  createUserModal = { web: '//p[text()="Create user"]/ancestor::div[1]' };

  userRoleAdmin = { web: '//*[contains(text(),"User role")]//following-sibling::div//span[text()="Admin"]' };

  userRoleClient = { web: '//*[contains(text(),"User role")]//following-sibling::div//span[text()="Client"]' };

  deleteButtonForUser(user) {
    return {
      web: `//td[text()="${user}"]//following-sibling::td[3]//*[@data-testid="DeleteOutlineOutlinedIcon"]`
    };
  }

  deleteQuestionForUser(user) {
    return {
      web: `//*[text()="Delete ${user}? You cannot undo this action."]`
    };
  }
}

module.exports = new UsersPageObjects();
