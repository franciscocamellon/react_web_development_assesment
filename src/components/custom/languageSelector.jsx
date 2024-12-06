import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const LanguageSelector = ({ language, setLanguage, translate }) => {
  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">
        {translate("language")}
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={language}
        onChange={handleChange}
      >
        <FormControlLabel
          value="en"
          control={<Radio />}
          label={translate("english")}
        />
        <FormControlLabel
          value="es"
          control={<Radio />}
          label={translate("spanish")}
        />
        <FormControlLabel
          value="pt"
          control={<Radio />}
          label={translate("portuguese")}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default LanguageSelector;
