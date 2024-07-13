export interface ScheduleFormModel {
  firstStep: {
    name: string;
    birthDate: string; 
  };
  secondStep: {
    scheduleDate: string; 
    scheduleTime: string;
  };
}

export function getEmptyScheduleForm():ScheduleFormModel{
  return {
  firstStep: {
    name: "",
    birthDate: "", 
  },
  secondStep: {
    scheduleDate: "", 
    scheduleTime: "",
  }}
}