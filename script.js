function showSection() {
    let section = document.querySelector('.submitted');
    // Read input values
    const nameInput = document.getElementById('fullName');
    const amountInput = document.getElementById('amount');
    const name = nameInput ? nameInput.value.trim() : '';
    const amountRaw = amountInput ? amountInput.value.trim() : '';
    const amountNum = amountRaw !== '' && !isNaN(Number(amountRaw)) ? Number(amountRaw) : null;

    // Populate summary fields
    const summaryName = document.getElementById('summaryName');
    const summaryAmount = document.getElementById('summaryAmount');
    if (summaryName) summaryName.textContent = name || '—';
    if (summaryAmount) summaryAmount.textContent = amountNum !== null ? `₦${amountNum.toLocaleString('en-NG')}` : '—';

    // Toggle views
    document.querySelector('.container').style.display = 'none';
    section.style.display = 'block';

    section.scrollIntoView({ behavior : 'smooth'});
}