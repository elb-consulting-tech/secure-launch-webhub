
import React from 'react';
import { 
  Shield, 
  Lock, 
  AlertTriangle, 
  FileText, 
  Server, 
  Cpu, 
  Users, 
  Globe,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { ThreatsBarChart, VulnerabilityPieChart, DefenseComparisonChart } from '../components/DashboardCharts';

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Shield className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-lg hidden sm:inline-block">CyberReport</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <button onClick={() => scrollToSection('intro')} className="hover:text-blue-600 transition-colors">Introduction</button>
            <button onClick={() => scrollToSection('threats')} className="hover:text-blue-600 transition-colors">Threats</button>
            <button onClick={() => scrollToSection('vulnerabilities')} className="hover:text-blue-600 transition-colors">Vulnerabilities</button>
            <button onClick={() => scrollToSection('defenses')} className="hover:text-blue-600 transition-colors">Defenses</button>
            <button onClick={() => scrollToSection('challenges')} className="hover:text-blue-600 transition-colors">Challenges</button>
          </nav>
          <button 
            onClick={() => scrollToSection('conclusion')}
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Key Findings
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            Cybersecurity Executive Report
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300 mb-10">
            A comprehensive analysis of threats, vulnerabilities, and defense mechanisms in Industry 4.0, Cyber-Physical Systems (CPS), and SMEs.
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => scrollToSection('intro')}
              className="flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Read Report <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 space-y-24">
        
        {/* Introduction */}
        <section id="intro" className="scroll-mt-24">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">Introduction</h2>
            <p className="text-lg text-slate-600">
              Cybersecurity has become a central concern across industries. With rapid technological advancements and increasing reliance on interconnected systems, malicious actors have found new avenues for exploitation. This report synthesizes research to inform robust countermeasure strategies.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <Server className="h-10 w-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Industry 4.0</h3>
              <p className="text-slate-600">Focus on smart manufacturing, OT convergence, and real-time data exchange risks.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <Users className="h-10 w-10 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">SMEs</h3>
              <p className="text-slate-600"> addressing resource limitations, phishing susceptibility, and policy gaps.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <Cpu className="h-10 w-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">CPS Systems</h3>
              <p className="text-slate-600">Analyzing critical infrastructure attacks and stealthy digital intrusions.</p>
            </div>
          </div>
        </section>

        {/* Threats */}
        <section id="threats" className="scroll-mt-24">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">Cybersecurity Threats</h2>
            <p className="text-lg text-slate-600 max-w-3xl">
              The modern threat landscape targets both data and physical operations. Below is a breakdown of prevalent attacks in Industry 4.0 environments.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold mb-6">Industry 4.0 Attack Prevalence</h3>
              <ThreatsBarChart />
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1"><AlertTriangle className="h-6 w-6 text-red-500" /></div>
                <div>
                  <h4 className="font-semibold text-lg">DoS & DDoS Attacks</h4>
                  <p className="text-slate-600">Overwhelming network resources to disrupt production lines, causing significant financial loss.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1"><Globe className="h-6 w-6 text-blue-500" /></div>
                <div>
                  <h4 className="font-semibold text-lg">Man-in-the-Middle (MITM)</h4>
                  <p className="text-slate-600">Interception of sensor data in real-time operations, leading to dangerous system malfunctions.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1"><Lock className="h-6 w-6 text-purple-500" /></div>
                <div>
                  <h4 className="font-semibold text-lg">False Data Injection (FDIA)</h4>
                  <p className="text-slate-600">Manipulating sensor readings to trigger incorrect control responses in automated factories.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vulnerabilities */}
        <section id="vulnerabilities" className="scroll-mt-24 bg-slate-100 -mx-4 px-4 py-16 sm:rounded-3xl">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">System Vulnerabilities</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                 Weaknesses often arise from the convergence of legacy technologies and modern digital infrastructures.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-blue-600 mb-2">Industry 4.0</h4>
                  <p className="text-slate-700">Software vulnerabilities (buffer overflows) and open network protocols in smart devices allow unauthorized entry.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-green-600 mb-2">SMEs</h4>
                  <p className="text-slate-700">Resource constraints lead to unpatched systems. Human factors (phishing) remain the largest vector.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-purple-600 mb-2">CPS (Cyber-Physical Systems)</h4>
                  <p className="text-slate-700">Lack of redundancy in control systems means a single point of failure can disrupt critical infrastructure.</p>
                </div>
              </div>
              <div className="order-1 lg:order-2 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                 <h3 className="text-lg font-semibold mb-6 text-center">Vulnerability Distribution</h3>
                 <VulnerabilityPieChart />
              </div>
            </div>
          </div>
        </section>

        {/* Defenses */}
        <section id="defenses" className="scroll-mt-24">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">Defense Mechanisms</h2>
            <p className="text-lg text-slate-600">
              Comparing Model-Based approaches (precise, physics-aware) vs. Data-Driven approaches (adaptive, ML-based).
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Model-Based</h3>
              <p className="text-slate-600 mb-4">Uses mathematical models (e.g., Kalman Filters) to detect anomalies in real-time.</p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500"/> High precision</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500"/> Physics-aware</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-6">
                <DatabaseIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Data-Driven</h3>
              <p className="text-slate-600 mb-4">Leverages Machine Learning (SVM, Neural Networks) to identify patterns.</p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500"/> Adaptive</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500"/> No model needed</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Hybrid</h3>
              <p className="text-slate-600 mb-4">Combines real-time precision of models with the adaptability of AI.</p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500"/> Best accuracy</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500"/> Robustness</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-semibold mb-6">Defense Effectiveness vs. Complexity</h3>
            <DefenseComparisonChart />
          </div>
        </section>

        {/* Challenges */}
        <section id="challenges" className="scroll-mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-8">Emerging Challenges</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Complexity of CPS", desc: "Modelling modern cyber-physical systems is difficult due to multiple interconnected components." },
              { title: "Data Sovereignty", desc: "Ensuring secure data exchange while respecting national boundaries and privacy laws." },
              { title: "Stealth Attacks", desc: "Attackers are developing 'stealth' FDIAs that bypass conventional threshold detection." },
              { title: "Standardization", desc: "Lack of universal security protocols leads to inconsistent protection across sectors." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 bg-white border rounded-lg">
                <div className="flex-shrink-0 w-1 h-full bg-red-500 rounded-full"></div>
                <div>
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section id="conclusion" className="bg-slate-900 text-white -mx-4 px-4 py-16 sm:rounded-3xl scroll-mt-24">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Conclusion & Key Findings</h2>
            <p className="text-lg text-slate-300 mb-10">
              Robust cybersecurity defenses require an integrated approach. As cyber threats evolve, research must focus on adaptive algorithms, hybrid defense models, and standardized security measures to safeguard critical infrastructure.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h4 className="font-bold text-xl mb-2 text-blue-400">Strategy</h4>
                <p className="text-slate-300">Adopt hybrid methodologies combining physical models with AI/ML.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h4 className="font-bold text-xl mb-2 text-green-400">Future Work</h4>
                <p className="text-slate-300">Develop adaptive algorithms for stealthy attacks and enhance data sovereignty frameworks.</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-4 text-center text-slate-500">
          <p>&copy; 2025 Cybersecurity Executive Report. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function DatabaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}
