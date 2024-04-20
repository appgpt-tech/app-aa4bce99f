//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const MedicalHistoriesTitle = () => {
  const record = useRecordContext();
  return (
    <span>
      MedicalHistories {record ? `"${record.medicalConditions}"` : ''}
    </span>
  );
};

export const MedicalHistoriesList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <TextField source="medicalConditions" />
      <TextField source="medicalHistory" />
      <TextField source="allergies" />
      <TextField source="medication" />
      <TextField source="bloodType" />
      <TextField source="chronicalDisease" />
      <NumberField source="age" />
      <TextField source="alternativeNumbers" />
      <TextField source="familyMembers" />
      <TextField source="nextOfKin" />
      <TextField source="medicalAid" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const MedicalHistoriesEdit = () => (
  <Edit title={<MedicalHistoriesTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="medicalConditions" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="medicalHistory" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="allergies" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="medication" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="bloodType" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="chronicalDisease" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="age" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="alternativeNumbers" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="familyMembers" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="nextOfKin" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="medicalAid" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const MedicalHistoriesCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="medicalConditions" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="medicalHistory" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="allergies" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="medication" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="bloodType" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="chronicalDisease" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="age" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="alternativeNumbers" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="familyMembers" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="nextOfKin" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="medicalAid" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
];
