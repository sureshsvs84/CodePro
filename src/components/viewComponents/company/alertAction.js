import MaterializeComponent from 'materialize-css';

export const SuccessAlert = (data) => () => {
    MaterializeComponent.toast({
        html: "Company data updated successfully",
        classes: 'successToast'
    });
};

export const FailureAlert = (data) => () => {
    MaterializeComponent.toast({
        html: "Company update failed",
        classes: 'dangerToast'
    });
};

export const WarningAlert = (data) => () => {
    MaterializeComponent.toast({
        html: "Company data updated partially",
        classes: 'warningToast'
    });
};

export const ValidationAlert = (data) => () => {
    MaterializeComponent.toast({
        html: data,
        classes: 'warningToast'
    });
};