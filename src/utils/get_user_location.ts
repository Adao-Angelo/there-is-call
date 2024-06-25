import axios from "axios";
import { AppError } from "../errors/appErrors";

interface I_location {
  latitude: string;
  longitude: string;
}

async function get_user_location({ latitude, longitude }: I_location) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

  try {
    const { data } = await axios.get(url);
    if (data && data.address) {
      const country = data.address.country || "Country not found";
      const city =
        data.address.city ||
        data.address.town ||
        data.address.village ||
        "City not found";

      return `${country}/${city}/${"address"}`;
    } else {
      return "No results found.";
    }
  } catch (error) {
    throw new AppError(`Error to get user location ! ${error}`, 400);
  }
}

export { get_user_location };
