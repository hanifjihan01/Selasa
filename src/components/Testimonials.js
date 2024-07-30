// src/components/Testimonials.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const testimonials = [
  {
    project: "Perumahan Taman Asri - Tanggerang",
    name: "Ibu Anita (Project Owner)",
    comment: "Saya tau Citipump dari Tokopedia dan reviewnya bagus-bagus. Yang jelas puas banget, ini orderan saya yang kedua dan yang pertama tuh hasilnya bagus banget."
  },
  {
    project: "Hotel Wellness & Resort - Bogor",
    name: "Bapak Hairuddin (Project Owner)",
    comment: "Timnya tangguh dan mesinnya semua lengkap, kerjasama dan komunikasi yang terjalin sangat baik sehingga mempermudah proyek untuk selesai."
  },
  {
    project: "Rumah - Bintaro",
    name: "Bapak Tono (Project Contractor)",
    comment: "Pompa Betonnya bagus dan secara servis memuaskan. Dan pastinya akan pakai pompa dari Citipump lagi."
  },
  {
    project: "Villa Pribadi - Bogor",
    name: "Bapak Asep (Project Contractor)",
    comment: "Kualitas dan harganya sangat baik dibanding kompetitor yang lain."
  },
  {
    project: "Proyek Rumah Tinggal - Meruya",
    name: "Bapak Jazuli (Project Contractor)",
    comment: "Kebetulan sudah pernah pakai untuk proyek sebelumnya, dan saya jadi percaya karena hasilnya terbukti baik."
  },
  {
    project: "Proyek Perumahan Cluster - Meruya",
    name: "Bapak Alamsyah (Project Contractor)",
    comment: "Karena lokasi yang dekat dari proyek dan kualitasnya yang bagus."
  }
];

function Testimonials() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">What Our Clients Say</h2>
      <div className="row">
        {testimonials.map((testimonial, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{testimonial.project}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{testimonial.name}</h6>
                <p className="card-text">{testimonial.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
