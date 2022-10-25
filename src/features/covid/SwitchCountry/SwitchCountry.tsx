import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NativeSelect, FormControl } from "@material-ui/core";

import { fetchAsyncGetDaily } from "../covidSlice";
import { useAppDispatch } from "../../../app/hooks";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(3),
    minWidth: 320,
  },
}));

const SwitchCountry: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const countries = [
    "japan",
    "us",
    "germany",
    "india",
    "france",
    "italy",
    "spain",
    "russia",
    "brazil",
    "taiwan",
    "thailand",
    "new zealand",
    "sweden",
  ];

  return (
    <FormControl className={classes.formControl}>
      <NativeSelect
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          dispatch(fetchAsyncGetDaily(e.target.value))
        }
      >
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default SwitchCountry;
