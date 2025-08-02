
 
 
 const btn = document.getElementById("chickenBtn");
  const sound = document.getElementById("chickenSound");

  btn.addEventListener("click", () => {
    // رجع الصوت لبدايته وشغّله
    sound.currentTime = 0;
    sound.play().catch(err => {
      console.warn("لم يتم تشغيل الصوت تلقائيًا. لازم المستخدم يتفاعل أولًا.");
    });

    // وقف الصوت بعد 4 ثواني
    setTimeout(() => {
      sound.pause();
      sound.currentTime = 0;
    }, 4000);

    // أنيميشن الفرخة
    btn.classList.add("run");

    // Scroll لأعلى الصفحة
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    // شيل كلاس الأنيميشن بعد انتهاء الحركة
    setTimeout(() => {
      btn.classList.remove("run");
    }, 2000);
  });