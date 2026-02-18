function Overview() {
  return (
    <section id="overview" className="bg-sky-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* About Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About the Workshop
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The four-day symposium, “Next-Generation Wastewater Treatment
            Modelling and Control,” will be held from March 24–27 at Vellore
            Institute of Technology (VIT), Chennai. The program focuses on
            advanced modelling and control strategies to enhance the
            performance, efficiency, and sustainability of wastewater treatment
            systems. Participants will explore dynamic process modelling, Model
            Predictive and AI-based control techniques, real-time sensor
            monitoring, and data-driven optimization for energy efficiency and
            disturbance management. The workshop aims to equip attendees with
            the expertise needed to design smart, automated, and
            resource-efficient treatment facilities aligned with modern
            environmental standards.
          </p>
        </div>

        {/* What You Will Gain */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What You Will Gain
          </h2>

          <p className="text-gray-600">
            Six key takeaways that make this workshop worth your time.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold mb-2">Advanced Modelling Expertise</h3>
            <p className="text-sm text-gray-600">
              Learn to develop dynamic and data-driven models that accurately
              represent biological and physicochemical wastewater treatment
              processes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold mb-2">Modern Control Strategies</h3>
            <p className="text-sm text-gray-600">
              Gain practical understanding of advanced control techniques such
              as Model Predictive Control (MPC), adaptive control, and
              intelligent control for stable and efficient plant operation
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold mb-2">
              Simulation & Software Proficiency
            </h3>
            <p className="text-sm text-gray-600">
              Acquire hands-on exposure to simulation and optimization tools
              used to analyze process dynamics and evaluate control performance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold mb-2">
              Energy & Resource Optimization Skills
            </h3>
            <p className="text-sm text-gray-600">
              Understand strategies to minimize energy consumption, improve
              aeration efficiency, and enable resource recovery for sustainable
              plant operation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold mb-2">
              Real-Time Monitoring & Automation
            </h3>
            <p className="text-sm text-gray-600">
              Explore sensor integration, data acquisition, and smart automation
              techniques for real-time process supervision and disturbance
              rejection
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold mb-2">
              Industry-Relevant Problem-Solving Ability
            </h3>
            <p className="text-sm text-gray-600">
              Develop the capability to address real-world operational
              challenges through case studies, practical insights, and exposure
              to modern wastewater treatment technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
