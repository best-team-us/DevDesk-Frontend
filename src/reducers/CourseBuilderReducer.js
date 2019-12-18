import { SELECT_COURSE, SELECT_UNIT, SELECT_WEEK, SELECT_DAY, SET_COURSES } from '../actions/CourseBuilderActions.js';

const initialState = {
    courseSelected: false,
    unitSelected: false,
    weekSelected: false,
    daySelected: false,
    
    selectedCourse: '',
    selectedUnit: '',
    selectedWeek: '',
    selectedDay: '',

    courses: [],
  };


export const CourseBuilderReducer = (state = initialState, action) => {
    // console.log('CourseBuilderReducer initialState: ', initialState);
    // console.log('CourseBuilderReducer firing: ', action);
    switch(action.type) {
        case SET_COURSES: 
            console.log('', action.payload)
        return{
            ...state, courses: [action.payload],
        }
        case SELECT_COURSE:
            console.log('SELECT_COURSE FIRING', action.payload);
            let pickedCourse = state.courses.find(course => {
                return course.name === action.payload;
            })
            return {
                ...state,
                courseSelected: true,
                selectedCourse: action.payload,
                units: [...pickedCourse.units]
            };
            case SELECT_UNIT:
                console.log('SELECT_UNIT FIRING', action.payload);
                let pickedUnit = state.units.find(unit => {
                    return unit.number == action.payload;
                })
                console.log('pickedUnit', pickedUnit);
                return {
                    ...state,
                    unitSelected: true,
                    selectedUnit: action.payload,
                    weeks: [...pickedUnit.weeks]
                };
            case SELECT_WEEK:
                console.log('SELECT_WEEK FIRING', action.payload);
                let pickedWeek = state.weeks.find(week => {
                    return week.number == action.payload;
                })
                console.log('pickedWeek', pickedWeek);
                return {
                    ...state,
                    weekSelected: true,
                    selectedWeek: action.payload,
                    days: [...pickedWeek.days]
                };
            case SELECT_DAY:
                console.log('SELECT_DAY FIRING', action.payload);
                let pickedDay = state.days.find(day => {
                    return day.number == action.payload;
                })
                console.log('pickedDay', pickedDay);
                return {
                    ...state,
                    daySelected: true,
                    selectedDay: action.payload,
                    day: pickedDay,
                };
        default: //console.log('REDUCER DEFAULT'); 
        return state;
  }
}
