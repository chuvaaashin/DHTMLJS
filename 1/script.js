window.onload = function() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const thirteenthDate = new Date(year, currentMonth, 13);
    const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const dayOfWeek = thirteenthDate.getDay();
    document.getElementById('result').textContent = `13-е число текущего месяца выпадает на: ${daysOfWeek[dayOfWeek]}`;
}
