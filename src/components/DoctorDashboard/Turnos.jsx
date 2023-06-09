import { useState, useContext, useEffect } from "react";
import { Context } from '../../context/ContextProvider';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Button, Box, Typography, Divider } from '@mui/material';



const Turnos = ({id}) => {
    const {turnos, fetchTurnos} = useContext(Context)[3];
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!turnos.length) {
            const search = async () => {
                await fetchTurnos(id)
            }
            search()
        }
        else{
          setLoading(false);
        }
        // console.log(turnos);
    }, [loading]);


    const handleClick = (event)=>{
        console.log(event.target);
    }
    return ( 
        <>
            <Box style={{display:"flex", flexDirection:"row", justifyContent:"center", padding:"0px 0 10px 0"}}>
                <Typography style={{fontSize:"larger", fontWeight:"600"}}>Listado de Turnos</Typography>
            </Box>
            <Divider />
            <TableContainer component={Paper}>
                <Table>
                    <TableHead style={{ backgroundColor: "lightgray", position: "sticky", top: 0, zIndex:1 }}>
                        <TableRow>
                            <TableCell key="nombre" align="left">Fecha</TableCell>
                            <TableCell key="apellido" align="center">Hora</TableCell>
                            <TableCell align="center">Paciente</TableCell>
                            <TableCell align="center">Nota del Paciente</TableCell>
                            <TableCell align="center">Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {turnos.map(turno => (
                                <TableRow>
                                    <TableCell align="left">{turno.fecha}</TableCell>
                                    <TableCell align="center">{turno.hora}</TableCell>
                                    <TableCell align="center">{`${turno.paciente.nombre} ${turno.paciente.apellido}`}</TableCell>
                                    <TableCell align="center">{turno.descripcion}</TableCell>
                                    <TableCell align="center"><Button id={turno.id} onClick={handleClick} variant="outlined" size="small">Cancelar Turno</Button></TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
export default Turnos