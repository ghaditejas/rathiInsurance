const notifyMeReducers = (notifyme = { notifyme: false }, action) => {
    switch (action.type) {
        case "NOTIFY_ME":
            return { notifyme: action.notifyme };
        default:
            return notifyme; //state does not change
    }
};

export default notifyMeReducers;