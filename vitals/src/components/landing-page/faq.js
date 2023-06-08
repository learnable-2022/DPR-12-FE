import React from 'react'
import './landing.css'

export default function Faq() {
  return (
    <section id="faq">
        <p>FAQs</p><br />
        <h2>Frequently Asked Questions</h2>
        <ul class="accordion">
            <li>
                <input type="radio" name="accordion" id="first" />
                <label for="first">What is an EMR?</label>
                <div class="content">
                    <p>An EMR, or Electronic Medical Record, is a digital version of a patient's medical information and history. It is a comprehensive, electronic repository that contains patient demographics, medical history, diagnoses, medications, treatment plans, laboratory results, imaging reports, and other relevant clinical data. The EMR system replaces traditional paper-based records, allowing healthcare providers to store, manage, and access patient information more efficiently.</p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="second" />
                <label for="second">Does the EMR support interoperability with other systems and healthcare providers?</label>
                <div class="content">
                    <p>Yes, Electronic Medical Records (EMR) systems are designed to support interoperability with other systems and healthcare providers. Interoperability refers to the ability of different systems and software applications to exchange and use information seamlessly.</p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="third" />
                <label for="third">Are there any additional costs or fees beyond the initial purchase or subscription?</label>
                <div class="content">
                    <p>Yes, there can be additional costs or fees associated with EMR systems beyond the initial purchase or subscription. These additional costs can vary depending on the specific EMR vendor, the features and functionalities chosen, and the size and needs of the healthcare organization.</p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="fourth" />
                <label for="fourth">Can the EMR accommodate different medical specialties and workflows?</label>
                <div class="content">
                    <p>Yes, EMR systems can accommodate different medical specialties and workflows. EMR vendors understand that different medical specialties have unique requirements and workflows, and they strive to provide flexibility and customization options to cater to those specific needs.</p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="fifth" />
                <label for="fifth">Does the EMR offer features for clinical documentation, including progress notes and medical orders?</label>
                <div class="content">
                    <p>Yes, EMR systems typically offer features for clinical documentation, including progress notes and medical orders. Clinical documentation is a critical aspect of patient care, and EMRs are designed to streamline and enhance the documentation process. </p>
                </div>
            </li>
        </ul>
</section>
  )
}
