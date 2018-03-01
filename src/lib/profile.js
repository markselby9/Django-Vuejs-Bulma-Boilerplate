import http from './http';

let profile;

const getProfile = (successFunc, errorFunc) => {
  const user = JSON.parse(sessionStorage.user);
  if (user) {
    http.get(`/users/${user.pk}/get_profile/`).then(response => {
      profile = response;
      if (successFunc) {
        successFunc(response);
      }
    }).catch(err => {
      profile = null;
      if (errorFunc) errorFunc(err);
    })
  }
};

const updateSelectedMentor = (mentorID, successFunc, errorFunc) => {
  const newProfile = JSON.parse(JSON.stringify(profile));
  newProfile.selected_mentor = mentorID;
  if (profile) {
    http.put(`/profiles/${profile.id}/`, newProfile).then(response => {
      profile = response;
      if (successFunc) {
        successFunc(response);
      }
    }).catch(err => {
      if (errorFunc) errorFunc(err);
    })
  }
};

export default {
  getProfile,
  updateSelectedMentor
}
