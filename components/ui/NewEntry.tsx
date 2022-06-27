import React, { ChangeEvent, useContext, useState } from 'react';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Box, Button, TextField } from '@mui/material';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UIContext } from '../../context/ui';

export const NewEntry = () => {

    // const [isAdding, setIsAdding] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [touched, setTouched] = useState(false);

    const { addNewEntry } = useContext( EntriesContext );
    const { isAddingEntry, setIsAddingEntry } = useContext( UIContext );

    const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue( event.target.value );
    }

    const onSave = () => {
        if ( inputValue.length === 0  ) return;
        addNewEntry(inputValue);
        setIsAddingEntry(false);
        setTouched(false);
        setInputValue('');
    }

    return (
        <Box sx={{ marginBottom: 2, paddingX: 2 }}>
            {
                isAddingEntry ? (
                    <>
                        <TextField 
                            fullWidth
                            sx={{ marginTop: 2, marginBottom: 1 }}
                            placeholder='Nueva entrada'
                            autoFocus
                            multiline
                            label='Nueva entrada'
                            helperText={ inputValue.length <= 0 && touched && 'Ingrese un valor' }
                            error={ inputValue.length <= 0 && touched }
                            value={ inputValue }
                            onChange={ onTextFieldChanged }
                            onBlur={ () => setTouched(true)}
                        />

                        <Box display='flex' justifyContent='space-between'>
                            <Button
                                variant='text'
                                onClick={() => setIsAddingEntry( false )}
                            >
                                Cancelar
                            </Button>

                            <Button
                                variant='outlined'
                                color='secondary'
                                endIcon={ <SaveOutlinedIcon /> }
                                onClick={ onSave }
                            >
                                Guardar
                            </Button>
                        </Box>                    
                    </>
                ) : (
                    <Button
                        startIcon={<AddCircleOutlineOutlinedIcon />}
                        fullWidth
                        variant='outlined'
                        onClick={() => setIsAddingEntry( true )}
                    >
                        Agrregar Tarea
                    </Button>
                )
            }
        </Box>
    )
}
