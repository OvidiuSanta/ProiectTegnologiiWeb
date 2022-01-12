import React, { useState, useRef } from 'react'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { styled } from '@mui/material/styles'

const StyledActionsTableCell = styled(TableCell)({
    '& > svg:nth-of-type(1)': {
        marginRight: '.8em'
    }
})

const StyledTabelHeader = styled(TableCell)({
    fontWeight: '700'
})

function Row({ row }) {
    const [isExpanded, setIsExpanded] = React.useState(false)
    const [isInfoEditable, setIsInfoEditable] = useState(false)
    const focusRef = useRef(null)

    const handleFocus = () => {
        focusRef.current.focus()
    }

    return (
        <React.Fragment>
            <TableRow sx={{ cursor: 'pointer', '& > *': { borderBottom: 'unset' } }} onClick={() => setIsExpanded(!isExpanded)} hover>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setIsExpanded(!isExpanded)}>
                        {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.no}
                </TableCell>
                <TableCell align="center" contentEditable={isInfoEditable} ref={focusRef}>{row.name}</TableCell>
                <TableCell align="center" contentEditable={isInfoEditable}>{row.email}</TableCell>
                <TableCell align="center">
                    <Chip label={row.category} color="primary" size="small" />
                </TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align="center">{row.creationDate}</TableCell>
                <StyledActionsTableCell align="right">
                    <IconButton size="small" aria-label="edit er" onClick={(event) => {
                        console.log(row)
                        handleFocus()
                        setIsInfoEditable(true)
                        event.stopPropagation()
                    }}>
                        <EditIcon />
                    </IconButton>
                    <IconButton size="small" aria-label="delete er" onClick={(event) => { setIsInfoEditable(false); event.stopPropagation() }}>
                        <DeleteIcon />
                    </IconButton>
                </StyledActionsTableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
                    <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Detalii
                            </Typography>
                            {}
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}

export default function ErTable({ data }) {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <StyledTabelHeader>No.</StyledTabelHeader>
                        <StyledTabelHeader align="center">Nume</StyledTabelHeader>
                        <StyledTabelHeader align="center">Email</StyledTabelHeader>
                        <StyledTabelHeader align="center">Categorie</StyledTabelHeader>
                        <StyledTabelHeader align="center">Status</StyledTabelHeader>
                        <StyledTabelHeader align="center">Data creării</StyledTabelHeader>
                        <StyledTabelHeader align="right">Actiuni</StyledTabelHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
