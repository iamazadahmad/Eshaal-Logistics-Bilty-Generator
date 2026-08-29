// ===== Signature image (embedded so the app works fully offline) =====
const SIGNATURE_B64 = "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";

// ===== Item rows (input side) =====
const itemsInputBody = document.getElementById('itemsInputBody');

function addItemRow(qty = '', goods = '', wt = '') {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td><input type="text" class="qty-input" value="${escAttr(qty)}" placeholder="e.g. 10 Bags"></td>
    <td><input type="text" class="goods-input" value="${escAttr(goods)}" placeholder="Description of goods"></td>
    <td><input type="text" class="wt-input" value="${escAttr(wt)}" placeholder="e.g. 2 MT"></td>
    <td style="text-align:center">
      <button type="button" class="remove-row-btn" title="Remove row">&times;</button>
    </td>
  `;
  itemsInputBody.appendChild(tr);
  tr.querySelector('.remove-row-btn').addEventListener('click', () => {
    if (itemsInputBody.rows.length > 1) {
      tr.remove();
    }
  });
}

document.getElementById('addRowBtn').addEventListener('click', () => addItemRow());

// start with one blank row
addItemRow();

// ===== Helpers =====
function escAttr(str) {
  return String(str).replace(/"/g, '&quot;');
}
function esc(str) {
  if (str === undefined || str === null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
function nl2br(str) {
  return esc(str).replace(/\n/g, '<br>');
}
function formatDate(isoDate) {
  if (!isoDate) return '';
  const [y, m, d] = isoDate.split('-');
  if (!y || !m || !d) return isoDate;
  return `${d}-${m}-${y}`;
}

// ===== Collect form data =====
function collectFormData() {
  const items = [...itemsInputBody.rows].map(row => ({
    quantity: row.querySelector('.qty-input').value,
    goods: row.querySelector('.goods-input').value,
    actualWeight: row.querySelector('.wt-input').value
  }));

  return {
    serialNumber: document.getElementById('serialNumber').value,
    vehicleNumber: document.getElementById('vehicleNumber').value,
    cnNumber: document.getElementById('cnNumber').value,
    cnDate: formatDate(document.getElementById('cnDate').value),
    from: document.getElementById('from').value,
    to: document.getElementById('to').value,
    consignor: document.getElementById('consignor').value,
    consignee: document.getElementById('consignee').value,
    items,
    totalWeight: document.getElementById('totalWeight').value
  };
}

// ===== Render one bilty page =====
const CHARGE_LABELS = ['Rate', 'S.C.', 'H.S.', 'INSURANCE', 'DOOR DEL.', 'GROSS', 'GST'];

function renderBiltyPage(d, copyLabel) {
  const itemRowsHtml = d.items.map(it => `
    <tr>
      <td>${nl2br(it.quantity)}</td>
      <td>${nl2br(it.goods)}</td>
      <td>${esc(it.actualWeight)}</td>
    </tr>
  `).join('');

  const chargeRowsHtml = CHARGE_LABELS.map(label => `
    <div class="charge-row"><span>${label}</span><span></span></div>
  `).join('');

  return `
    <div class="top-bar">
      <span class="sl-no">SL. NO. <b>${esc(d.serialNumber)}</b></span>
      <span class="copy-badge">${copyLabel}</span>
    </div>
    <div class="form-border">

      <div class="accent-bar"></div>
      <div class="header-row">
        <div class="gstpan">GSTIN: 19BNPPA5235E1Z2<br>PAN: BNPPA5235E</div>
        <div class="company">
          <div class="company-brand-row">
            <div class="emblem">EL</div>
            <div class="company-text">
              <div class="brand-name">Eshaal Logistics</div>
              <div class="brand-rule"></div>
              <div class="tagline">Fleet Owner &amp; Transport Contractor</div>
            </div>
          </div>
          <div class="address">16, SK. Muslim Road, Kamarhati, Kolkata &ndash; 700 058</div>
        </div>
        <div class="phones">(M) 6289845426<br>(M) 9875563564</div>
      </div>

      <div class="party-row">
        <div class="party-info">
          <div><strong>CONSIGNOR:</strong> ${nl2br(d.consignor)}</div>
          <div class="gstline"><strong>GST NO. :</strong></div>
        </div>
        <div class="mini-box">
          <div class="mini-row"><span class="mini-label">CN. No.</span><span class="mini-value">${esc(d.cnNumber)}</span></div>
          <div class="mini-row"><span class="mini-label">CN. Dt.</span><span class="mini-value">${esc(d.cnDate)}</span></div>
        </div>
      </div>

      <div class="party-row">
        <div class="party-info">
          <div><strong>CONSIGNEE:</strong> ${nl2br(d.consignee)}</div>
          <div class="gstline"><strong>GST NO. :</strong></div>
        </div>
        <div class="mini-box">
          <div class="mini-row"><span class="mini-label">From</span><span class="mini-value">${esc(d.from)}</span></div>
          <div class="mini-row"><span class="mini-label">To</span><span class="mini-value">${esc(d.to)}</span></div>
        </div>
      </div>

      <div class="items-section">
        <table class="items-table">
          <thead>
            <tr>
              <th>Product Qty.</th>
              <th>Particulars of Goods (Said to Contain)</th>
              <th>Actual Wt. (Kgs)</th>
            </tr>
          </thead>
          <tbody>${itemRowsHtml}</tbody>
        </table>
        <div class="totalwt-col">
          <div class="totalwt-header">Total Wt. (Kgs)</div>
          <div class="totalwt-value">${esc(d.totalWeight)}</div>
        </div>
        <div class="charges-col">
          <div class="charges-header"><span>Rate</span><span>Amount (Rs.)</span></div>
          ${chargeRowsHtml}
        </div>
      </div>

      <div class="footer-row1">
        <div class="terms">Consignment is booked subjected to Term &amp; Condition Stated over leaf</div>
        <div class="value-goods">Value of Goods: To Be Billed</div>
        <div class="total-cell">TOTAL</div>
      </div>

      <div class="footer-row2">
        <div class="ewb-vehicle">
          <div>EWB No.</div>
          <div>Vehicle No. ${esc(d.vehicleNumber)}</div>
        </div>
        <div class="mode-payment">Mode of Payment</div>
        <div class="signature-box">
          <div>For <strong>Eshaal Logistics</strong></div>
          <img class="sig-img" src="data:image/png;base64,${SIGNATURE_B64}" alt="Authorised signature">
          <div>Authorised Signatory</div>
        </div>
      </div>

    </div>
  `;
}

// ===== Generate + download PDF (single click, no preview, no dialog) =====
const downloadBtn = document.getElementById('downloadBtn');

async function buildAndDownloadPdf() {
  const data = collectFormData();

  // Render both copies into the hidden off-screen container
  document.getElementById('page-consignee').innerHTML = renderBiltyPage(data, 'CONSIGNEE COPY');
  document.getElementById('page-pod').innerHTML = renderBiltyPage(data, 'POD COPY');

  // Make sure fonts (Playfair Display / Inter) are loaded before we snapshot,
  // otherwise the canvas can capture a fallback font.
  if (document.fonts && document.fonts.ready) {
    try { await document.fonts.ready; } catch (e) { /* ignore */ }
  }
  // Let the browser paint the newly-injected content before capturing it.
  await new Promise(resolve => setTimeout(resolve, 100));

  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
  const pageEls = [document.getElementById('page-consignee'), document.getElementById('page-pod')];

  for (let i = 0; i < pageEls.length; i++) {
    const canvas = await html2canvas(pageEls[i], {
      scale: 3,
      backgroundColor: '#ffffff',
      useCORS: true
    });
    const imgData = canvas.toDataURL('image/jpeg', 0.95);
    const pageWidth = 297;
    const pageHeight = (canvas.height * pageWidth) / canvas.width;
    if (i > 0) pdf.addPage();
    pdf.addImage(imgData, 'JPEG', 0, 0, pageWidth, pageHeight);
  }

  const serial = data.serialNumber ? data.serialNumber.replace(/[^a-z0-9-]+/gi, '_') : 'Bilty';
  pdf.save(`Eshaal_Logistics_Bilty_${serial}.pdf`);
}

downloadBtn.addEventListener('click', async () => {
  downloadBtn.disabled = true;
  const originalLabel = downloadBtn.textContent;
  downloadBtn.textContent = 'Generating PDF…';
  try {
    await buildAndDownloadPdf();
  } catch (err) {
    console.error(err);
    alert('Something went wrong generating the PDF. Please try again.');
  } finally {
    downloadBtn.disabled = false;
    downloadBtn.textContent = originalLabel;
  }
});
