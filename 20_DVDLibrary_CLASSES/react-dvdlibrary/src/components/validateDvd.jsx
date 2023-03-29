export function validateForm(dvd) {
  const errors = [];

  if (!dvd.title) {
    errors.push("Title is required.");
  }

  const releaseYearPattern = /^\d{4}$/;
  const currentYear = new Date().getFullYear() + 1;
  const releaseYear = parseInt(dvd.releaseYear, 10);

  if (!releaseYearPattern.test(dvd.releaseYear) || releaseYear > currentYear) {
    errors.push("Release Year must be a valid 4-digit calendar year.");
  }
  return errors;
}

export function validateSearch(searchCategory, searchTerm) {
  const errors = [];

  if (!searchCategory) {
    errors.push("Search Category is a required field.");
  }

  if (!searchTerm) {
    errors.push("Search Term is a required field.");
  }

  return errors;
}
