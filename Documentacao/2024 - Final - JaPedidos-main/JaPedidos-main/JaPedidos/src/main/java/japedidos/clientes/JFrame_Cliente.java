package japedidos.clientes;

import japedidos.AccessController;
import japedidos.bd.BD;
import japedidos.pedidos.JPanel_AlterarPedido;
import java.awt.Color;
import javax.swing.table.DefaultTableModel;
import japedidos.produto.load_DB2_components;
import java.awt.Cursor;
import javax.swing.JOptionPane;

/**
 *
 * @author f.oliveira
 */
public class JFrame_Cliente extends javax.swing.JFrame {

    /**
     * Creates new form cliente
     */
    public JFrame_Cliente() {
        if (BD.isAccessible()) {
            AccessController.verificarLogin();
        } else {
            System.exit(0);
        }
        initComponents();
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jScrollPane1 = new javax.swing.JScrollPane();
        jTable1 = new javax.swing.JTable();
        jpnl_principal = new javax.swing.JPanel();
        jpnl_pesquisa = new javax.swing.JPanel();
        jLblLupa = new javax.swing.JLabel();
        jTxtFpesquisa = new javax.swing.JTextField();
        jscp_clientes = new javax.swing.JScrollPane();
        jtbl_clientes = new javax.swing.JTable();
        jLbl_Produto = new javax.swing.JLabel();
        jLbl_Relatorio = new javax.swing.JLabel();
        jLbl_pedido = new javax.swing.JLabel();
        jLbl_Cliente = new javax.swing.JLabel();
        jtb_linhaBranca = new javax.swing.JToolBar();
        jLbl_LogoPaleta = new javax.swing.JLabel();
        jLbl_Imagem = new javax.swing.JLabel();

        jTable1.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {
                {null, null, null, null},
                {null, null, null, null},
                {null, null, null, null},
                {null, null, null, null}
            },
            new String [] {
                "Title 1", "Title 2", "Title 3", "Title 4"
            }
        ));
        jScrollPane1.setViewportView(jTable1);

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setTitle("JaPedidos - Gerenciar Clientes");
        setMaximumSize(new java.awt.Dimension(1024, 576));
        setMinimumSize(new java.awt.Dimension(1024, 576));
        setPreferredSize(new java.awt.Dimension(1024, 576));
        setResizable(false);
        addWindowListener(new java.awt.event.WindowAdapter() {
            public void windowOpened(java.awt.event.WindowEvent evt) {
                formWindowOpened(evt);
            }
        });

        jpnl_principal.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jpnl_pesquisa.setBackground(new java.awt.Color(255, 255, 255));
        jpnl_pesquisa.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jLblLupa.setIcon(new javax.swing.ImageIcon(getClass().getResource("/icon_lupa.png"))); // NOI18N
        jpnl_pesquisa.add(jLblLupa, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 0, 30, 40));

        jTxtFpesquisa.setOpaque(false);
        jTxtFpesquisa.setFont(jTxtFpesquisa.getFont().deriveFont((float)16));
        jTxtFpesquisa.setForeground(new java.awt.Color(153, 153, 153));
        jTxtFpesquisa.setText("Digite uma informação para pesquisar...");
        jTxtFpesquisa.addFocusListener(new java.awt.event.FocusAdapter() {
            public void focusGained(java.awt.event.FocusEvent evt) {
                jTxtFpesquisaFocusGained(evt);
            }
            public void focusLost(java.awt.event.FocusEvent evt) {
                jTxtFpesquisaFocusLost(evt);
            }
        });
        jTxtFpesquisa.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jTxtFpesquisaActionPerformed(evt);
            }
        });
        jpnl_pesquisa.add(jTxtFpesquisa, new org.netbeans.lib.awtextra.AbsoluteConstraints(40, 0, 670, 34));

        jpnl_principal.add(jpnl_pesquisa, new org.netbeans.lib.awtextra.AbsoluteConstraints(270, 70, 710, 34));

        jtbl_clientes.setAutoCreateRowSorter(true);
        jtbl_clientes.setFont(jtbl_clientes.getFont().deriveFont((float)16));
        jtbl_clientes.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {

            },
            new String [] {
                "CÓDIGO", "NOME DO CLIENTE", "TELEFONE"
            }
        ) {
            Class[] types = new Class [] {
                java.lang.Integer.class, java.lang.String.class, java.lang.String.class
            };
            boolean[] canEdit = new boolean [] {
                false, false, false
            };

            public Class getColumnClass(int columnIndex) {
                return types [columnIndex];
            }

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit [columnIndex];
            }
        });
        jtbl_clientes.setRowHeight(32);
        jtbl_clientes.getTableHeader().setReorderingAllowed(false);
        jtbl_clientes.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                jtbl_clientesMouseClicked(evt);
            }
        });
        jscp_clientes.setViewportView(jtbl_clientes);
        if (jtbl_clientes.getColumnModel().getColumnCount() > 0) {
            jtbl_clientes.getColumnModel().getColumn(0).setResizable(false);
            jtbl_clientes.getColumnModel().getColumn(0).setPreferredWidth(30);
            jtbl_clientes.getColumnModel().getColumn(1).setResizable(false);
            jtbl_clientes.getColumnModel().getColumn(1).setPreferredWidth(352);
            jtbl_clientes.getColumnModel().getColumn(2).setResizable(false);
            jtbl_clientes.getColumnModel().getColumn(2).setPreferredWidth(100);
        }

        jpnl_principal.add(jscp_clientes, new org.netbeans.lib.awtextra.AbsoluteConstraints(270, 120, 710, 380));

        jLbl_Produto.setBackground(new java.awt.Color(255, 255, 255));
        jLbl_Produto.setFont(new java.awt.Font("Impact", 0, 24)); // NOI18N
        jLbl_Produto.setText("PRODUTOS");
        jLbl_Produto.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                jLbl_ProdutoMouseClicked(evt);
            }
            public void mouseEntered(java.awt.event.MouseEvent evt) {
                jLbl_ProdutoMouseEntered(evt);
            }
            public void mouseExited(java.awt.event.MouseEvent evt) {
                jLbl_ProdutoMouseExited(evt);
            }
        });
        jpnl_principal.add(jLbl_Produto, new org.netbeans.lib.awtextra.AbsoluteConstraints(46, 250, -1, -1));

        jLbl_Relatorio.setBackground(new java.awt.Color(0, 0, 0));
        jLbl_Relatorio.setFont(new java.awt.Font("Impact", 0, 24)); // NOI18N
        jLbl_Relatorio.setText("RELATÓRIOS");
        jLbl_Relatorio.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                jLbl_RelatorioMouseClicked(evt);
            }
            public void mouseEntered(java.awt.event.MouseEvent evt) {
                jLbl_RelatorioMouseEntered(evt);
            }
            public void mouseExited(java.awt.event.MouseEvent evt) {
                jLbl_RelatorioMouseExited(evt);
            }
        });
        jpnl_principal.add(jLbl_Relatorio, new org.netbeans.lib.awtextra.AbsoluteConstraints(46, 330, -1, -1));

        jLbl_pedido.setBackground(new java.awt.Color(255, 255, 255));
        jLbl_pedido.setFont(new java.awt.Font("Impact", 0, 24)); // NOI18N
        jLbl_pedido.setText("PEDIDOS");
        jLbl_pedido.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                jLbl_pedidoMouseClicked(evt);
            }
            public void mouseEntered(java.awt.event.MouseEvent evt) {
                jLbl_pedidoMouseEntered(evt);
            }
            public void mouseExited(java.awt.event.MouseEvent evt) {
                jLbl_pedidoMouseExited(evt);
            }
        });
        jpnl_principal.add(jLbl_pedido, new org.netbeans.lib.awtextra.AbsoluteConstraints(46, 290, -1, -1));

        jLbl_Cliente.setBackground(new java.awt.Color(255, 255, 255));
        jLbl_Cliente.setFont(new java.awt.Font("Impact", 0, 24)); // NOI18N
        jLbl_Cliente.setForeground(new java.awt.Color(255, 255, 255));
        jLbl_Cliente.setText("CLIENTES");
        jpnl_principal.add(jLbl_Cliente, new org.netbeans.lib.awtextra.AbsoluteConstraints(46, 210, -1, -1));

        jtb_linhaBranca.setBackground(new java.awt.Color(255, 255, 255));
        jtb_linhaBranca.setBorder(null);
        jtb_linhaBranca.setForeground(new java.awt.Color(255, 255, 255));
        jtb_linhaBranca.setOrientation(javax.swing.SwingConstants.VERTICAL);
        jtb_linhaBranca.setBorderPainted(false);
        jpnl_principal.add(jtb_linhaBranca, new org.netbeans.lib.awtextra.AbsoluteConstraints(46, 240, 90, 4));

        jLbl_LogoPaleta.setBackground(new java.awt.Color(0, 102, 255));
        jLbl_LogoPaleta.setIcon(new javax.swing.ImageIcon(getClass().getResource("/painel_comandos_esquerda_05x.png"))); // NOI18N
        jpnl_principal.add(jLbl_LogoPaleta, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 10, 250, -1));

        jLbl_Imagem.setBackground(new java.awt.Color(255, 255, 255));
        jLbl_Imagem.setIcon(new javax.swing.ImageIcon(getClass().getResource("/background_clientes.png"))); // NOI18N
        jpnl_principal.add(jLbl_Imagem, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 1030, 580));

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jpnl_principal, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jpnl_principal, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
        );

        pack();
        setLocationRelativeTo(null);
    }// </editor-fold>//GEN-END:initComponents

    private void jTxtFpesquisaActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jTxtFpesquisaActionPerformed
        // TODO add your handling code here:
//        System.out.println("funcionou!!");
            setCursor(Cursor.getPredefinedCursor(Cursor.WAIT_CURSOR));
        preencherClientes(BD.Cliente.selectAllLike(jTxtFpesquisa.getText())); 
            setCursor(Cursor.getPredefinedCursor(Cursor.DEFAULT_CURSOR));
    }//GEN-LAST:event_jTxtFpesquisaActionPerformed

    private final void preencherClientes(Cliente[] clientes) {
        DefaultTableModel model = ((DefaultTableModel)jtbl_clientes.getModel());
        model.setRowCount(0);
        if (clientes != null) {
            for (Cliente c : clientes) {
                if (c != null) {
                    model.addRow(new Object[] {String.valueOf(c.getId()), c.getNome(), c.getTelefone()});
                }
            }
        }
    }
    
    private final void preencherClientes() {
        setCursor(Cursor.getPredefinedCursor(Cursor.WAIT_CURSOR));
        Cliente[] recebidos = BD.Cliente.selectAll();
        preencherClientes(recebidos);
        setCursor(Cursor.getPredefinedCursor(Cursor.DEFAULT_CURSOR));
    }
    
    private void jLbl_ProdutoMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_jLbl_ProdutoMouseClicked
        // TODO add your handling code here:
        this.setVisible(false);
        japedidos.produto.JFrame_ListaProdutos frame = new japedidos.produto.JFrame_ListaProdutos();
        int x = this.getX() + this.getWidth() / 2 - frame.getWidth() / 2;
        int y = this.getY() + this.getHeight()/ 2 - frame.getHeight() / 2;
        frame.setLocation(x, y);
        frame.setVisible(true);
        this.dispose();
    }//GEN-LAST:event_jLbl_ProdutoMouseClicked

    private void jLbl_pedidoMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_jLbl_pedidoMouseClicked
        // TODO add your handling code here:
        this.setVisible(false);
        japedidos.pedidos.JFrame_GerenciamentoPedidos frame = new japedidos.pedidos.JFrame_GerenciamentoPedidos();
        int x = this.getX() + this.getWidth() / 2 - frame.getWidth() / 2;
        int y = this.getY() + this.getHeight()/ 2 - frame.getHeight() / 2;
        frame.setLocation(x, y);
        frame.setVisible(true);
        this.dispose();
    }//GEN-LAST:event_jLbl_pedidoMouseClicked

    private void jLbl_ProdutoMouseEntered(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_jLbl_ProdutoMouseEntered
        // TODO add your handling code here:
        jLbl_Produto.setForeground(new Color(187,187,187));
        
    }//GEN-LAST:event_jLbl_ProdutoMouseEntered

    private void jLbl_ProdutoMouseExited(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_jLbl_ProdutoMouseExited
        // TODO add your handling code here:
        jLbl_Produto.setForeground(Color.BLACK);
    }//GEN-LAST:event_jLbl_ProdutoMouseExited

    private void jLbl_pedidoMouseEntered(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_jLbl_pedidoMouseEntered
        // TODO add your handling code here:
        jLbl_pedido.setForeground(new Color(187,187,187));
    }//GEN-LAST:event_jLbl_pedidoMouseEntered

    private void jLbl_pedidoMouseExited(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_jLbl_pedidoMouseExited
        // TODO add your handling code here:
        jLbl_pedido.setForeground(Color.BLACK);
    }//GEN-LAST:event_jLbl_pedidoMouseExited

    private void jLbl_RelatorioMouseEntered(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_jLbl_RelatorioMouseEntered
        // TODO add your handling code here:
        jLbl_Relatorio.setForeground(new Color(187,187,187));
    }//GEN-LAST:event_jLbl_RelatorioMouseEntered

    private void jLbl_RelatorioMouseExited(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_jLbl_RelatorioMouseExited
        // TODO add your handling code here:
        jLbl_Relatorio.setForeground(Color.BLACK);
        
    }//GEN-LAST:event_jLbl_RelatorioMouseExited

    private void jTxtFpesquisaFocusGained(java.awt.event.FocusEvent evt) {//GEN-FIRST:event_jTxtFpesquisaFocusGained
        // TODO add your handling code here:
        jTxtFpesquisa.setText("");
        jTxtFpesquisa.setForeground(Color.BLACK);
    }//GEN-LAST:event_jTxtFpesquisaFocusGained

    private void jTxtFpesquisaFocusLost(java.awt.event.FocusEvent evt) {//GEN-FIRST:event_jTxtFpesquisaFocusLost
        // TODO add your handling code here:
        jTxtFpesquisa.setText("Digite uma informação para pesquisar...");
        jTxtFpesquisa.setForeground(new Color(153,153,153));
    }//GEN-LAST:event_jTxtFpesquisaFocusLost

    private void jtbl_clientesMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_jtbl_clientesMouseClicked
        // TODO add your handling code here:

    }//GEN-LAST:event_jtbl_clientesMouseClicked

    private void jLbl_RelatorioMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_jLbl_RelatorioMouseClicked
        this.setVisible(false);
        japedidos.relatorios.JFrame_Relatorios frame = new japedidos.relatorios.JFrame_Relatorios();
        int x = this.getX() + this.getWidth() / 2 - frame.getWidth() / 2;
        int y = this.getY() + this.getHeight()/ 2 - frame.getHeight() / 2;
        frame.setLocation(x, y);
        frame.setVisible(true);
        this.dispose();
    }//GEN-LAST:event_jLbl_RelatorioMouseClicked

    private void formWindowOpened(java.awt.event.WindowEvent evt) {//GEN-FIRST:event_formWindowOpened
        // TODO add your handling code here:
        this.preencherClientes();
    }//GEN-LAST:event_formWindowOpened

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(JFrame_Cliente.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(JFrame_Cliente.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(JFrame_Cliente.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(JFrame_Cliente.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>
        //</editor-fold>
        //</editor-fold>
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new JFrame_Cliente().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JLabel jLblLupa;
    private javax.swing.JLabel jLbl_Cliente;
    private javax.swing.JLabel jLbl_Imagem;
    private javax.swing.JLabel jLbl_LogoPaleta;
    private javax.swing.JLabel jLbl_Produto;
    private javax.swing.JLabel jLbl_Relatorio;
    private javax.swing.JLabel jLbl_pedido;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JTable jTable1;
    private javax.swing.JTextField jTxtFpesquisa;
    private javax.swing.JPanel jpnl_pesquisa;
    private javax.swing.JPanel jpnl_principal;
    private javax.swing.JScrollPane jscp_clientes;
    private javax.swing.JToolBar jtb_linhaBranca;
    private javax.swing.JTable jtbl_clientes;
    // End of variables declaration//GEN-END:variables
}
