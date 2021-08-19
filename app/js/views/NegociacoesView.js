class NegociacoesView extends View {
    template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <td>DATA</td>
                        <td>QUANTIDADE</td>
                        <td>VALOR</td>
                        <td>VOLUME</td>
                    </tr>
                </thead>

                <tbody>
                    ${model.paraArray().map(negociacao => `
                        <tr>
                            <td>${negociacao.data.getDate()}/${negociacao.data.getMonth() + 1}/${negociacao.data.getFullYear()}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume}</td>
                        </tr>
                        `).join('')}
                </tbody>
                
                <tfoot>
                </tfoot>
            </table>
        `;
    }
}
