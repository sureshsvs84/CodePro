import MaterializeComponent from 'materialize-css';

export const SuccessAlert = (data, module) => () => {
    MaterializeComponent.toast({
        html: module + " " + "data updated successfully",
        classes: 'successToast'
    });
};

export const FailureAlert = (data) => () => {
    MaterializeComponent.toast({
        html: module + " " + "update failed",
        classes: 'dangerToast'
    });
};

export const WarningAlert = (data) => () => {
    MaterializeComponent.toast({
        html: module + " " + "data updated partially",
        classes: 'warningToast'
    });
};

export const ValidationAlert = (data, module) => () => {
    MaterializeComponent.toast({
        html: data,
        classes: 'warningToast'
    });
};