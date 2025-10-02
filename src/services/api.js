export const getUser = async () => {
  const res = await fetch('https://rimac-front-end-challenge.netlify.app/api/user.json');
  if (!res.ok) throw new Error('Error fetching user');
  return res.json();
};

export const getPlans = async () => {
  const res = await fetch('https://rimac-front-end-challenge.netlify.app/api/plans.json');
  if (!res.ok) throw new Error('Error fetching plans');
  return res.json();
};