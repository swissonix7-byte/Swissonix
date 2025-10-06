import { Shield, FileText, Users, AlertTriangle, Scale, Clock, Mail, Gavel } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermsOfService() {
  const lastUpdated = "October 5, 2025";

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Scale className="w-4 h-4 mr-2" />
            Legal Terms & Conditions
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Terms of Service
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 font-light max-w-3xl mx-auto">
            Please read these terms carefully before using our AI development services and website
          </p>
          <p className="text-gray-500">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Agreement to Terms */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-xl flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-0">Agreement to Terms</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                These Terms of Service ("Terms") govern your use of Swissonix's website and AI development services. 
                By accessing our website or engaging our services, you agree to be bound by these Terms. If you do not 
                agree to these Terms, please do not use our services.
              </p>
            </div>

            {/* Services Description */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-xl flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-0">Our Services</h2>
              </div>
              
              <p className="text-gray-600 mb-4">Swissonix provides the following services:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Custom AI development and implementation</li>
                <li>Business process automation solutions</li>
                <li>Data analytics and real-time insights platforms</li>
                <li>Chatbot and conversational AI development</li>
                <li>Smart tools and workflow optimization</li>
                <li>Technical consulting and support services</li>
              </ul>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-xl flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-0">User Responsibilities</h2>
              </div>
              
              <p className="text-gray-600 mb-4">By using our services, you agree to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide accurate and complete information when requested</li>
                <li>Use our services only for lawful purposes</li>
                <li>Respect intellectual property rights</li>
                <li>Maintain the confidentiality of any login credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not interfere with or disrupt our services</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
              </ul>
            </div>

            {/* Project Terms */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-xl flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-0">Project Terms & Deliverables</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Scope</h3>
                  <p className="text-gray-600 mb-3">All projects will be governed by a separate Statement of Work (SOW) that includes:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Detailed project scope and deliverables</li>
                    <li>Timeline and milestones</li>
                    <li>Payment terms and schedule</li>
                    <li>Acceptance criteria and testing procedures</li>
                    <li>Support and maintenance terms</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Changes and Modifications</h3>
                  <p className="text-gray-600">
                    Any changes to the agreed project scope must be documented in writing and may result in 
                    adjustments to timeline and costs. We will provide estimates for additional work before proceeding.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-xl flex items-center justify-center mr-4">
                  <Gavel className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-0">Payment Terms</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  <strong>Payment Schedule:</strong> Payment terms will be specified in each project's Statement of Work. 
                  Typically, we require a deposit before work begins, with remaining payments tied to project milestones.
                </p>
                <p className="text-gray-600">
                  <strong>Late Payments:</strong> Overdue payments may result in project suspension and may incur late fees 
                  as specified in the project agreement.
                </p>
                <p className="text-gray-600">
                  <strong>Refunds:</strong> Refund policies will be outlined in individual project agreements. 
                  Generally, payments for completed work are non-refundable.
                </p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-xl flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-0">Intellectual Property Rights</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  <strong>Client Ownership:</strong> Upon full payment, clients will own the custom code and solutions 
                  developed specifically for their project, excluding any pre-existing intellectual property or 
                  third-party components.
                </p>
                <p className="text-gray-600">
                  <strong>Swissonix Property:</strong> We retain ownership of our methodologies, frameworks, tools, 
                  and any pre-existing intellectual property used in delivering services.
                </p>
                <p className="text-gray-600">
                  <strong>Third-Party Components:</strong> Some solutions may incorporate third-party software or APIs, 
                  which remain subject to their respective licenses and terms.
                </p>
              </div>
            </div>

            {/* Confidentiality */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-xl flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-0">Confidentiality</h2>
              </div>
              
              <p className="text-gray-600">
                We understand the sensitive nature of business information and commit to maintaining strict confidentiality 
                of all client data, business processes, and proprietary information. We will sign separate Non-Disclosure 
                Agreements (NDAs) when required by clients.
              </p>
            </div>

            {/* Warranties and Disclaimers */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-xl flex items-center justify-center mr-4">
                  <AlertTriangle className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-0">Warranties and Disclaimers</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  <strong>Service Warranty:</strong> We warrant that our services will be performed with professional 
                  skill and care in accordance with industry standards.
                </p>
                <p className="text-gray-600">
                  <strong>Disclaimer:</strong> Except as expressly stated, our services are provided "as is" without 
                  warranties of any kind. We do not guarantee specific business outcomes or results.
                </p>
                <p className="text-gray-600">
                  <strong>Third-Party Services:</strong> We are not responsible for the performance, availability, 
                  or functionality of third-party services, APIs, or platforms integrated into our solutions.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-xl flex items-center justify-center mr-4">
                  <Scale className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-0">Limitation of Liability</h2>
              </div>
              
              <p className="text-gray-600">
                To the maximum extent permitted by law, Swissonix's total liability for any claims arising from our 
                services shall not exceed the total amount paid by the client for the specific project giving rise to 
                the claim. We shall not be liable for any indirect, incidental, special, or consequential damages.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-xl flex items-center justify-center mr-4">
                  <AlertTriangle className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-0">Termination</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  Either party may terminate a project agreement with written notice as specified in the project's 
                  Statement of Work. Upon termination:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Client shall pay for all work completed up to the termination date</li>
                  <li>We will deliver all completed work and project materials</li>
                  <li>Both parties will return or destroy confidential information</li>
                  <li>Surviving clauses (confidentiality, intellectual property) remain in effect</li>
                </ul>
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-xl flex items-center justify-center mr-4">
                  <Gavel className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-0">Governing Law</h2>
              </div>
              
              <p className="text-gray-600">
                These Terms shall be governed by and construed in accordance with the laws of the India
                , without regard to its conflict of law provisions. Any disputes shall be resolved through 
                binding arbitration in New Delhi, India.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-xl flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-0">Changes to Terms</h2>
              </div>
              
              <p className="text-gray-600">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes 
                by posting the updated Terms on our website and updating the "Last Updated" date. Continued use of 
                our services after changes constitutes acceptance of the new Terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-xl flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-0">Contact Us</h2>
              </div>
              
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> contact@swissonix.com</p>
                <p><strong>Company:</strong> Swissonix</p>
                <p><strong>Address:</strong> New Delhi, India</p>
              </div>
              
              <p className="text-gray-600 mt-4">
                We will respond to your inquiry within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
