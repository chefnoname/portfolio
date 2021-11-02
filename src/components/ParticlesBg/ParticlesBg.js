import Particles from "react-tsparticles";
import particlesConfig from "./particles-config";

const ParticlesBg = () => {
  const particlesInit = (main) => {
    console.log(main);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesConfig}
    />
  );
};

export default ParticlesBg;
