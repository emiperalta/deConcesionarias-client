import * as Yup from 'yup';

const vehicleFormSchema = Yup.object().shape({
  name: Yup.string().required(),
});

const propertyFormSchema = Yup.object().shape({
  name: Yup.string().required(),
  category: Yup.object().shape({
    value: Yup.number().required(),
    label: Yup.string().required(),
  }),
});

export const validateVehicleInput = data => {
  return vehicleFormSchema.validate(data).catch(err => err.errors);
};

export const validatePropertyInput = data => {
  return propertyFormSchema.validate(data).catch(err => err.errors);
};
