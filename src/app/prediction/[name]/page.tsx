const getPredictedAge = async (name: string) => {
  const response = await fetch(`https://api.agify.io/?name=${name}`);
  return response.json();
};

const getPredictedGender = async (name: string) => {
  const response = await fetch(`https://api.genderize.io/?name=${name}`);
  return response.json();
};

const getPredictedNationality = async (name: string) => {
  const response = await fetch(`https://api.nationalize.io/?name=${name}`);
  return response.json();
};

interface Params {
  params: { name: string };
}

export default async function Page({ params }: Params) {
  //promises
  const ageData = getPredictedAge(params.name);
  const genderData = getPredictedGender(params.name);
  const nationalityData = getPredictedNationality(params.name);

  const [age, gender, country] = await Promise.all([
    ageData,
    genderData,
    nationalityData,
  ]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-8 bg-white rounded shadow-md">
        <div className="text-lg font-bold text-black">Personal Info</div>
        <div className="text-black">Age: {age?.age}</div>
        <div className="text-black">Gender: {gender?.gender}</div>
        <div className="text-black">
          Country: {country?.country[0]?.country_id}
        </div>
      </div>
    </div>
  );
}
