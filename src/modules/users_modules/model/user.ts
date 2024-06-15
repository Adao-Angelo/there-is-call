interface I_location {
  latitude: string;
  longitude: string;
}

interface I_user {
  name: string;
  email: string;
  password: string;
  contact: string;
  type_account?: "client" | "agent";
  status?: "active" | "inactive";
  location?: string;
}

export { I_user, I_location };
