/**
 * FAKE AUTH, ONLY FOR SHOWCASE TO DOT INDONESIA HIRING TASK
 * @returns string | null
 */
export function useAuth() {
  const dummyUser = localStorage.getItem("dummy_user");

  return dummyUser;
}
