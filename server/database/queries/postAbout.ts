type Body = {
  id: string;
  content: string;
};
export async function postAbout(key: string, rqBody: Body): Promise<boolean> {
  if (key === 'about' && rqBody) {
    return true;
  } else {
    return false;
  }
}
