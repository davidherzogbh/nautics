/*
Nautics, a javascript library
Copyright (C) 2018  David Herzog-B.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

function convertMetersPerSecondToKnots(mps) {
    return (mps * (3.6 / 1.852));
}

function  convertKnotsToMetersPerSecond(kts) {
    return (kts / (3.6 / 1.852));
}

function  convertMetersPerSecondToKilometersPerHour(mps) {
    return (mps * 3.6);
}

function  convertKilometersPerHourToMetersPerSecond(kph) {
    return kph / 3.6;
}

function convertMetersToNauticalMiles(m){
    return m/1852.0;
}

