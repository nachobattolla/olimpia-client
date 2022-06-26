import AvailableCell from "./AvailableCell";
import Table from 'react-bootstrap/Table'
const ReservesTable=(props)=>{

    return(
        <Table striped bordered hover size="sm">
            <thead>
            <tr>
                <th>Hour</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
                <th>Sunday</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>00:00- 00:30</td>
                <td><AvailableCell props={props.reserves.Monday.time[0]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[0]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[0]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[0]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[0]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[0]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[0]}/></td>
            </tr>
            <tr>
                <td>00:30- 01:00</td>
                <td><AvailableCell props={props.reserves.Monday.time[1]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[1]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[1]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[1]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[1]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[1]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[1]}/></td>
            </tr>       <tr>
                <td>01:00- 01:30</td>
                <td><AvailableCell props={props.reserves.Monday.time[2]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[2]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[2]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[2]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[2]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[2]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[2]}/></td>
            </tr>       <tr>
                <td>01:30- 02:00</td>
                <td><AvailableCell props={props.reserves.Monday.time[3]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[3]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[3]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[3]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[3]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[3]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[3]}/></td>
            </tr>       <tr>
                <td>02:00- 02:30</td>
                <td><AvailableCell props={props.reserves.Monday.time[4]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[4]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[4]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[4]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[4]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[4]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[4]}/></td>
            </tr>       <tr>
                <td>02:30- 03:00</td>
                <td><AvailableCell props={props.reserves.Monday.time[5]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[5]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[5]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[5]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[5]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[5]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[5]}/></td>
            </tr>       <tr>
                <td>03:00 - 3:30</td>
                <td><AvailableCell props={props.reserves.Monday.time[6]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[6]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[6]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[6]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[6]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[6]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[6]}/></td>
            </tr>       <tr>
                <td>03:30 - 4:00</td>
                <td><AvailableCell props={props.reserves.Monday.time[7]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[7]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[7]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[7]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[7]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[7]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[7]}/></td>
            </tr>       <tr>
                <td>04:00 - 4:30</td>
                <td><AvailableCell props={props.reserves.Monday.time[8]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[8]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[8]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[8]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[8]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[8]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[8]}/></td>
            </tr>       <tr>
                <td>04:30 - 5:00</td>
                <td><AvailableCell props={props.reserves.Monday.time[9]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[9]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[9]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[9]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[9]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[9]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[9]}/></td>
            </tr>       <tr>
                <td>05:00 - 5:30</td>
                <td><AvailableCell props={props.reserves.Monday.time[10]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[10]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[10]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[10]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[10]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[10]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[10]}/></td>
            </tr>       <tr>
                <td>05:30 - 6:00</td>
                <td><AvailableCell props={props.reserves.Monday.time[11]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[11]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[11]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[11]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[11]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[11]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[11]}/></td>
            </tr>       <tr>
                <td>06:00 - 6:30</td>
                <td><AvailableCell props={props.reserves.Monday.time[12]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[12]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[12]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[12]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[12]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[12]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[12]}/></td>
            </tr>       <tr>
                <td>06:30 - 7:00</td>
                <td><AvailableCell props={props.reserves.Monday.time[13]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[13]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[13]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[13]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[13]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[13]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[13]}/></td>
            </tr>       <tr>
                <td>07:00 - 7:30</td>
                <td><AvailableCell props={props.reserves.Monday.time[14]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[14]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[14]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[14]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[14]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[14]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[14]}/></td>
            </tr>       <tr>
                <td>07:30 - 8:00</td>
                <td><AvailableCell props={props.reserves.Monday.time[15]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[15]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[15]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[15]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[15]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[15]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[15]}/></td>
            </tr>       <tr>
                <td>08:00 - 8:30</td>
                <td><AvailableCell props={props.reserves.Monday.time[16]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[16]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[16]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[16]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[16]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[16]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[16]}/></td>
            </tr>       <tr>
                <td>08:30 - 9:00</td>
                <td><AvailableCell props={props.reserves.Monday.time[17]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[17]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[17]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[17]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[17]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[17]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[17]}/></td>
            </tr>       <tr>
                <td>09:00 - 9:30</td>
                <td><AvailableCell props={props.reserves.Monday.time[18]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[18]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[18]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[18]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[18]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[18]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[18]}/></td>
            </tr>       <tr>
                <td>09:30 - 10:00</td>
                <td><AvailableCell props={props.reserves.Monday.time[19]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[19]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[19]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[19]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[19]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[19]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[19]}/></td>
            </tr>       <tr>
                <td>10:00 - 10:30</td>
                <td><AvailableCell props={props.reserves.Monday.time[20]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[20]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[20]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[20]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[20]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[20]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[20]}/></td>
            </tr>       <tr>
                <td>10:30 - 11:00</td>
                <td><AvailableCell props={props.reserves.Monday.time[21]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[21]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[21]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[21]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[21]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[21]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[21]}/></td>
            </tr>       <tr>
                <td>11:00 - 11:30</td>
                <td><AvailableCell props={props.reserves.Monday.time[22]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[22]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[22]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[22]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[22]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[22]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[22]}/></td>
            </tr>       <tr>
                <td>11:30 - 12:00</td>
                <td><AvailableCell props={props.reserves.Monday.time[23]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[23]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[23]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[23]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[23]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[23]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[23]}/></td>
            </tr>       <tr>
                <td>12:00 - 12:30</td>
                <td><AvailableCell props={props.reserves.Monday.time[24]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[24]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[24]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[24]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[24]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[24]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[24]}/></td>
            </tr>       <tr>
                <td>12:30 - 13:00</td>
                <td><AvailableCell props={props.reserves.Monday.time[25]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[25]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[25]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[25]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[25]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[25]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[25]}/></td>
            </tr>       <tr>
                <td>13:00 - 13:30</td>
                <td><AvailableCell props={props.reserves.Monday.time[26]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[26]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[26]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[26]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[26]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[26]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[26]}/></td>
            </tr>       <tr>
                <td>13:30 - 14:00</td>
                <td><AvailableCell props={props.reserves.Monday.time[27]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[27]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[27]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[27]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[27]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[27]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[27]}/></td>
            </tr>       <tr>
                <td>14:00 - 14:30</td>
                <td><AvailableCell props={props.reserves.Monday.time[28]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[28]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[28]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[28]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[28]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[28]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[28]}/></td>
            </tr>       <tr>
                <td>14:30 - 15:00</td>
                <td><AvailableCell props={props.reserves.Monday.time[29]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[29]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[29]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[29]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[29]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[29]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[29]}/></td>
            </tr>       <tr>
                <td>15:00 - 15:30</td>
                <td><AvailableCell props={props.reserves.Monday.time[30]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[30]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[30]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[30]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[30]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[30]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[30]}/></td>
            </tr>       <tr>
                <td>15:30 - 16:00</td>
                <td><AvailableCell props={props.reserves.Monday.time[31]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[31]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[31]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[31]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[31]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[31]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[31]}/></td>
            </tr>       <tr>
                <td>16:00 - 16:30</td>
                <td><AvailableCell props={props.reserves.Monday.time[32]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[32]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[32]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[32]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[32]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[32]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[32]}/></td>
            </tr>       <tr>
                <td>16:30 - 17:00</td>
                <td><AvailableCell props={props.reserves.Monday.time[33]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[33]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[33]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[33]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[33]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[33]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[33]}/></td>
            </tr>       <tr>
                <td>17:00 - 17:30</td>
                <td><AvailableCell props={props.reserves.Monday.time[34]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[34]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[34]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[34]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[34]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[34]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[34]}/></td>
            </tr>       <tr>
                <td>17:30 - 18:00</td>
                <td><AvailableCell props={props.reserves.Monday.time[35]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[35]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[35]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[35]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[35]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[35]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[35]}/></td>
            </tr>       <tr>
                <td>18:00 - 18:30</td>
                <td><AvailableCell props={props.reserves.Monday.time[36]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[36]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[36]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[36]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[36]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[36]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[36]}/></td>
            </tr>       <tr>
                <td>18:30 - 19:00</td>
                <td><AvailableCell props={props.reserves.Monday.time[37]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[37]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[37]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[37]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[37]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[37]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[37]}/></td>
            </tr>       <tr>
                <td>19:00 - 19:30</td>
                <td><AvailableCell props={props.reserves.Monday.time[38]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[38]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[38]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[38]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[38]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[38]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[38]}/></td>
            </tr>       <tr>
                <td>19:30 - 20:00</td>
                <td><AvailableCell props={props.reserves.Monday.time[39]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[39]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[39]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[39]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[39]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[39]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[39]}/></td>
            </tr>       <tr>
                <td>20:00 - 20:30</td>
                <td><AvailableCell props={props.reserves.Monday.time[40]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[40]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[40]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[40]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[40]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[40]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[40]}/></td>
            </tr>       <tr>
                <td>20:30 - 21:00</td>
                <td><AvailableCell props={props.reserves.Monday.time[41]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[41]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[41]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[41]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[41]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[41]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[41]}/></td>
            </tr>       <tr>
                <td>21:00 - 21:30</td>
                <td><AvailableCell props={props.reserves.Monday.time[42]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[42]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[42]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[42]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[42]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[42]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[42]}/></td>
            </tr>       <tr>
                <td>21:30 - 22:00</td>
                <td><AvailableCell props={props.reserves.Monday.time[43]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[43]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[43]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[43]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[43]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[43]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[43]}/></td>
            </tr>       <tr>
                <td>22:00 - 22:30</td>
                <td><AvailableCell props={props.reserves.Monday.time[44]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[44]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[44]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[44]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[44]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[44]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[44]}/></td>
            </tr>       <tr>
                <td>22:30 - 23:00</td>
                <td><AvailableCell props={props.reserves.Monday.time[45]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[45]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[45]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[45]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[45]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[45]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[45]}/></td>
            </tr>       <tr>
                <td>23:00 - 23:30</td>
                <td><AvailableCell props={props.reserves.Monday.time[46]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[46]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[46]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[46]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[46]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[46]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[46]}/></td>
            </tr>       <tr>
                <td>23:30 - 00:00</td>
                <td><AvailableCell props={props.reserves.Monday.time[47]}/></td>
                <td><AvailableCell props={props.reserves.Tuesday.time[47]}/></td>
                <td><AvailableCell props={props.reserves.Wednesday.time[47]}/></td>
                <td><AvailableCell props={props.reserves.Thursday.time[47]}/></td>
                <td><AvailableCell props={props.reserves.Friday.time[47]}/></td>
                <td><AvailableCell props={props.reserves.Saturday.time[47]}/></td>
                <td><AvailableCell props={props.reserves.Sunday.time[47]}/></td>
            </tr>
            </tbody>
        </Table>
    )
}
export default ReservesTable