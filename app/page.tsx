import React from 'react';
import { WidgetProfile } from '@/components/WidgetProfile'
import { WidgetVideo } from '@/components/WidgetVideo'
import { WidgetAboutDoctor } from '@/components/WidgetAboutDoctor'
import { WidgetServicesAndConditions } from '@/components/WidgetServicesAndConditions'
import { WidgetTestimonialCarousel } from '@/components/WidgetTestimonialCarousel'
import { WidgetPricesAndPackages } from '@/components/WidgetPricesAndPackages'
import { WidgetBookConsultation } from '@/components/WidgetBookConsultation'
import { WidgetInsurances } from '@/components/WidgetInsurances'
import { WidgetMessageDoctor } from '@/components/WidgetMessageDoctor'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Widget - Left Column */}
          <div className="md:col-span-1">
                    <WidgetProfile {...{"profileImage":"/default-profile.jpg","name":"Dr. Alan","credentials":"MD, FACS","specialty":"Cardiologist","location":"123 Medical Center Dr, Healthcare City, HC 12345","rating":"4.9","reviewCount":127,"experience":"10+ years","languages":["English","Spanish"],"education":[{"college":"Harvard Medical School","position":"MD"},{"college":"Johns Hopkins University","position":"Residency"}],"hospitalAffiliations":[{"hospital":"Mount Sinai Hospital"},{"hospital":"NYU Langone Health"}],"boardCertificates":[{"certificate":"American Board of Internal Medicine"},{"certificate":"Cardiovascular Disease"}]}} />
          </div>
          
          {/* Main Content - Right Columns */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Column 1 */}
              <div className="space-y-6">
                        <WidgetVideo {...{"videoUrl":"https://www.youtube.com/embed/dQw4w9WgXcQ","title":"Meet Dr. Bellamy","description":"Learn more about our approach to patient care"}} />
        <WidgetAboutDoctor {...{"bio":"Dr. Smith is a board-certified cardiologist with over 15 years of experience in treating cardiovascular diseases.","education":[{"college":"Harvard Medical School","position":"MD"},{"college":"Johns Hopkins University","position":"Residency"}],"hospitalAffiliations":[{"hospital":"Massachusetts General Hospital"},{"hospital":"Johns Hopkins Hospital"}],"boardCertificates":[{"certificate":"Board Certified Family Medicine"},{"certificate":"Telemedicine Certification"}],"languages":[{"language":"English"},{"language":"Spanish"},{"language":"French"}]}} />
        <WidgetServicesAndConditions {...{"specializedServices":[{"service":"Annual Physicals"},{"service":"Chronic Disease Management"},{"service":"Mental Health"}],"conditions":[{"condition":"Diabetes"},{"condition":"Hypertension"},{"condition":"Depression"},{"condition":"Anxiety"}]}} />
        <WidgetTestimonialCarousel {...{"testimonials":[{"quote":"Dr. Smith is amazing! Very thorough and caring.","patientName":"Sarah J.","healthIssue":"Diabetes Management","rating":5},{"quote":"Convenient telehealth visits that actually work.","patientName":"Mike C.","healthIssue":"Annual Physical","rating":5},{"quote":"Professional, knowledgeable, and easy to talk to.","patientName":"Emily D.","healthIssue":"Mental Health","rating":5}]}} />
              </div>
              
              {/* Column 2 */}
              <div className="space-y-6">
                        <WidgetPricesAndPackages {...{"packages":[{"title":"Diabetes Management","price":"$250","checklist":[{"item":"2 visits free"},{"item":"Chat access 24x7"},{"item":"Diabetes Management"}]},{"title":"Chronic Care Management","price":"$300","checklist":[{"item":"Monthly check-ins"},{"item":"Medication management"},{"item":"Lifestyle coaching"}]}]}} />
        <WidgetBookConsultation {...{"consultationImage":"/consultation-image.jpg","title":"Book Your Consultation","description":"Schedule a personal consultation with me to discuss your concerns, get expert advice, and create a care plan tailored just for you.","buttonText":"Book Now","availability":"Next available: Tomorrow at 2:00 PM"}} />
        <WidgetInsurances {...{"insurances":[{"name":"Blue Cross Blue Shield","logo":"/insurance-logos/bcbs.png"},{"name":"Aetna","logo":"/insurance-logos/aetna.png"},{"name":"Cigna","logo":"/insurance-logos/cigna.png"},{"name":"UnitedHealth","logo":"/insurance-logos/unitedhealth.png"}],"title":"Accepted Insurance","description":"We accept most major insurance plans."}} />
        <WidgetMessageDoctor {...{"title":"Message Your Doctor","description":"Send me a secure message about your health concerns, medication questions, or any other medical inquiries. I'll respond within 24 hours.","buttonText":"Send Message","responseTime":"Response within 24 hours"}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}