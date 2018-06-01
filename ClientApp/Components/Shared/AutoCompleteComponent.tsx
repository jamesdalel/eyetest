import * as React from "react";
import InputLabel from '@material-ui/core/InputLabel';
import * as Autosuggest from 'react-autosuggest';
const match = require('autosuggest-highlight/match');
const parse = require('autosuggest-highlight/parse');
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';


interface AutoCompleteSuggestion {
    label: string;
}

interface AutoCompleteComponentProps {
    suggestions?: AutoCompleteSuggestion[];
    value?: any;
}

const AutoCompleteComponent: React.SFC<AutoCompleteComponentProps> = ({
    suggestions = [{
        label: 'Label A'
    }, {

    }],
    value = 'This is the value!',

}) => {

    const renderInput = (): any => {
        return (
            <TextField
              fullWidth
            />
          );
    };

    const renderSuggestionsContainer = (options: any): any => {
        const { containerProps, children } = options;

        return (
          <Paper {...containerProps} square>
            {children}
          </Paper>
        );
    };

    const getSuggestionValue = (suggestion: AutoCompleteSuggestion): string => {
        return suggestion.label;
    };

    const renderSuggestion = (suggestion: AutoCompleteSuggestion, { query, isHighlighted }: any): any => {
        const matches = match(suggestion.label, query);
        const parts = parse(suggestion.label, matches);
      
        return (
          <MenuItem selected={isHighlighted} component="div">
            <div>
              {parts.map((part: any, index: number) => {
                return part.highlight ? (
                  <span key={String(index)} style={{ fontWeight: 300 }}>
                    {part.text}
                  </span>
                ) : (
                  <strong key={String(index)} style={{ fontWeight: 500 }}>
                    {part.text}
                  </strong>
                );
              })}
            </div>
          </MenuItem>
        );
    };

    const handleSuggestionsFetchRequested = (): any => {
        console.log('handleSuggestionsFetchRequested');
    }

    const handleSuggestionsClearRequested = (): any => {
        console.log('handleSuggestionsClearRequested');
    }

    const handleChange = (): any => {
        console.log('handleChange');
    }

    function getSuggestions(value: any) {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        let count = 0;
      
        return inputLength === 0
          ? []
          : suggestions.filter(suggestion => {
              const keep =
                count < 5 && suggestion.label.toLowerCase().slice(0, inputLength) === inputValue;
      
              if (keep) {
                count += 1;
              }
      
              return keep;
            });
      }

    return (
        <React.Fragment>
            <InputLabel>Exisitng Device</InputLabel>
            <Autosuggest
                theme={{
                    // container: classes.container,
                    // suggestionsContainerOpen: classes.suggestionsContainerOpen,
                    // suggestionsList: classes.suggestionsList,
                    // suggestion: classes.suggestion,
                }}
                renderInputComponent={renderInput}
                suggestions={suggestions}
                onSuggestionsFetchRequested={handleSuggestionsFetchRequested}
                onSuggestionsClearRequested={handleSuggestionsClearRequested}
                renderSuggestionsContainer={renderSuggestionsContainer}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={{
                    // classes,
                    placeholder: 'Search a country (start with a)',
                    value: value,
                    onChange: handleChange,
                }}
            />
        </React.Fragment>
    );
};

export default AutoCompleteComponent;